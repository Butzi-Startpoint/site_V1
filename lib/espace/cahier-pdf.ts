import type { Cahier } from './cahiers'

/* Génère le PDF du cahier dans le navigateur (aucune donnée n'est envoyée à un serveur).
   Les champs remplis apparaissent avec la réponse, les champs vides avec des lignes à écrire à la main. */

export type CahierValues = {
  text: Record<string, string>
  checks: Record<string, boolean>
}

type RGB = [number, number, number]
const INK: RGB = [30, 23, 45]
const CREAM: RGB = [246, 241, 235]
const YELLOW: RGB = [255, 255, 171]
const VIOLET: RGB = [111, 79, 209]
const LAVENDER: RGB = [216, 208, 255]
const SOFT: RGB = [110, 104, 120]

const W = 210
const H = 297
const M = 16
const CW = W - 2 * M

/** Les polices standard du PDF ne gèrent que le Latin-1 étendu : on remplace le reste. */
function clean(s: string): string {
  return s
    .replace(/[‐‑‒]/g, '-')
    .replace(/[  ]/g, ' ')
    .replace(/[→➔]/g, '->')
    .replace(/✓|✔/g, 'x')
    // eslint-disable-next-line no-control-regex
    .replace(/[^\u0009\u000a -ÿŒœ–—‘’“”•…€]/g, '')
}

export async function downloadCahierPdf(cahier: Cahier, values: CahierValues, memberName: string) {
  const { jsPDF } = await import('jspdf')
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  let y = 0

  const fill = (c: RGB) => doc.setFillColor(c[0], c[1], c[2])
  const stroke = (c: RGB) => doc.setDrawColor(c[0], c[1], c[2])
  const color = (c: RGB) => doc.setTextColor(c[0], c[1], c[2])
  const lineH = (size: number) => size * 0.3528 * 1.35

  function need(h: number) {
    if (y + h > H - 18) {
      doc.addPage()
      y = M
    }
  }

  function text(s: string, x: number, size: number, style: 'normal' | 'bold' | 'italic', c: RGB, width = CW - (x - M)) {
    doc.setFont('helvetica', style)
    doc.setFontSize(size)
    color(c)
    const lines = doc.splitTextToSize(clean(s), width) as string[]
    for (const l of lines) {
      need(lineH(size))
      doc.text(l, x, y + size * 0.3528)
      y += lineH(size)
    }
    return lines.length
  }

  function rules(n: number, gap = 7.5) {
    stroke(LAVENDER)
    doc.setLineWidth(0.25)
    for (let i = 0; i < n; i++) {
      need(gap)
      y += gap
      doc.line(M, y, W - M, y)
    }
    y += 2
  }

  function heading(s: string) {
    need(16)
    y += 5
    text(s, M, 13, 'bold', INK)
    y += 1.5
  }

  function field(label: string, value: string, minLines: number) {
    // Garde le libellé avec au moins deux lignes d'écriture.
    need(8 + Math.min(Math.max(minLines, 1), 2) * 7.5)
    text(label, M, 9, 'bold', INK)
    y += 0.5
    const v = value.trim()
    if (v) {
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(10)
      color(INK)
      const lines = doc.splitTextToSize(clean(v), CW) as string[]
      for (const l of lines) {
        need(7.5)
        y += 7.5
        doc.text(l, M, y - 1.6)
        stroke(LAVENDER)
        doc.setLineWidth(0.25)
        doc.line(M, y, W - M, y)
      }
      const extra = minLines - lines.length
      if (extra > 0) rules(extra)
      else y += 2
    } else {
      rules(minLines)
    }
    y += 1
  }

  /* En-tête */
  fill(INK)
  doc.rect(0, 0, W, 44, 'F')
  y = 12
  text('ACCÉLÉRATION IA 360  ·  CAHIER D\'EXERCICES', M, 8, 'bold', [166, 138, 255])
  y += 3
  text(`Semaine ${cahier.week}`, M, 24, 'bold', YELLOW)
  text(cahier.title, M, 12, 'bold', CREAM)
  y = 54

  /* Identité */
  const date = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(9)
  color(INK)
  doc.text('Nom', M, y)
  doc.text('Date', M + 100, y)
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(10)
  doc.text(clean(memberName), M + 12, y)
  doc.text(date, M + 112, y)
  stroke(LAVENDER)
  doc.setLineWidth(0.25)
  doc.line(M + 11, y + 1.5, M + 92, y + 1.5)
  doc.line(M + 111, y + 1.5, W - M, y + 1.5)
  y += 8
  text(cahier.intro, M, 9.5, 'normal', SOFT)

  for (const b of cahier.blocks) {
    need(30)
    heading(b.title)
    if ('intro' in b && b.intro) {
      text(b.intro, M, 9.5, 'normal', SOFT)
      y += 1.5
    }

    if (b.type === 'keypoints') {
      for (const p of b.points) {
        need(7)
        fill(VIOLET)
        doc.circle(M + 1.2, y + 2.3, 0.8, 'F')
        text(p, M + 5, 10.5, 'normal', INK, CW - 5)
        y += 0.8
      }
      y += 1.5
    }

    if (b.type === 'fields') {
      for (const f of b.fields) field(f.label, values.text[f.id] ?? '', f.lines ?? 3)
    }

    if (b.type === 'checklist') {
      for (const it of b.items) {
        const lines = doc.splitTextToSize(clean(it.label), CW - 9) as string[]
        need(lines.length * lineH(10) + 2.5)
        stroke(INK)
        doc.setLineWidth(0.4)
        doc.rect(M, y + 0.4, 4.2, 4.2)
        if (values.checks[it.id]) {
          stroke(VIOLET)
          doc.setLineWidth(0.8)
          doc.line(M + 0.9, y + 2.6, M + 1.9, y + 3.8)
          doc.line(M + 1.9, y + 3.8, M + 3.6, y + 1.2)
        }
        const top = y
        text(it.label, M + 8, 10, 'normal', INK, CW - 8)
        y = Math.max(y, top + 5.4) + 1.5
      }
    }

    if (b.type === 'prompt') {
      const metier = b.personalize ? (values.text[b.personalize.id] ?? '').trim() : ''
      if (b.personalize) field(b.personalize.label, metier, 1)
      const promptText = b.personalize && metier ? b.prompt.replace(b.personalize.token, metier) : b.prompt
      doc.setFont('helvetica', 'italic')
      doc.setFontSize(9.5)
      const lines = doc.splitTextToSize(clean(promptText), CW - 10) as string[]
      const boxH = lines.length * lineH(9.5) + 8
      need(boxH + 2)
      fill(CREAM)
      doc.roundedRect(M, y, CW, boxH, 2, 2, 'F')
      fill(VIOLET)
      doc.rect(M, y, 1.2, boxH, 'F')
      const top = y
      y = top + 4
      text(promptText, M + 6, 9.5, 'italic', INK, CW - 10)
      y = top + boxH + 4
      for (const a of b.answers) field(a.label, values.text[a.id] ?? '', a.lines ?? 5)
    }
  }

  /* Pied de page sur chaque page */
  const total = doc.getNumberOfPages()
  for (let i = 1; i <= total; i++) {
    doc.setPage(i)
    stroke(LAVENDER)
    doc.setLineWidth(0.25)
    doc.line(M, H - 13, W - M, H - 13)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    color(SOFT)
    doc.text('StartPoint IA  ·  Accélération IA 360', M, H - 8)
    doc.text(`${i} / ${total}`, W - M, H - 8, { align: 'right' })
  }

  const safeName = clean(memberName).replace(/[^\w\- ]+/g, '').trim() || 'apprenant'
  doc.save(`Cahier semaine ${cahier.week} - ${safeName}.pdf`)
}
