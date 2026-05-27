'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { OptionButton } from './option-button'
import { Results } from './results'
import { ScrambleText } from '@/components/ui/scramble-text'
import { computeEstimation } from './calculator'
import type {
  Anciennete,
  Budget,
  Fiscal,
  StartDate,
  Statut,
  Tmi,
  Urssaf,
  WizardState,
} from './types'

const INITIAL: WizardState = {
  statut: null,
  anciennete: null,
  urssaf: null,
  budget: null,
  fiscal: null,
  tmi: null,
  startDate: null,
  email: '',
  consent: true,
}

const STATUT_OPTIONS: { value: Statut; label: string }[] = [
  { value: 'gerant-sarl', label: 'Gérant(e) majoritaire SARL / EURL' },
  { value: 'liberal-bnc', label: 'Profession libérale (BNC)' },
  { value: 'micro-commercial', label: 'Micro-entrepreneur (activité commerciale)' },
  { value: 'micro-liberal', label: 'Micro-entrepreneur (activité libérale)' },
  { value: 'artisan', label: 'Artisan (inscrit à la Chambre des Métiers)' },
  { value: 'sas-sasu', label: 'Président(e) SAS / SASU (assimilé salarié)' },
  { value: 'autre', label: 'Autre / Je ne sais pas' },
]

const ANCIENNETE_OPTIONS: { value: Anciennete; label: string }[] = [
  { value: 'moins-1an', label: 'Moins de 1 an' },
  { value: '1-3ans', label: 'Entre 1 et 3 ans' },
  { value: 'plus-3ans', label: 'Plus de 3 ans' },
]

const URSSAF_OPTIONS: { value: Urssaf; label: string }[] = [
  { value: 'oui', label: 'Oui' },
  { value: 'non', label: 'Non' },
  { value: 'ne-sait-pas', label: 'Je ne sais pas' },
]

const BUDGET_OPTIONS: { value: Budget; label: string }[] = [
  { value: 'non', label: 'Non, pas encore' },
  { value: 'partie', label: 'Oui, en partie' },
  { value: 'tout', label: 'Oui, tout utilisé' },
  { value: 'ne-sait-pas', label: 'Je ne sais pas' },
]

const FISCAL_OPTIONS: { value: Fiscal; label: string }[] = [
  { value: 'is', label: 'Société à l\'IS (impôt sur les sociétés)' },
  { value: 'ir-reel', label: 'Entreprise individuelle au réel (IR)' },
  { value: 'micro', label: 'Micro-entrepreneur (abattement forfaitaire)' },
  { value: 'ne-sait-pas', label: 'Je ne sais pas' },
]

const TMI_OPTIONS: { value: Tmi; label: string }[] = [
  { value: '11', label: '11%' },
  { value: '30', label: '30%' },
  { value: '41', label: '41%' },
  { value: '45', label: '45%' },
  { value: 'ne-sait-pas', label: 'Je ne sais pas (on prendra 30% par défaut)' },
]

const START_OPTIONS: { value: StartDate; label: string }[] = [
  { value: 'moins-15j', label: 'Dans moins de 15 jours' },
  { value: '15j-1mois', label: 'Dans 15 jours à 1 mois' },
  { value: 'plus-1mois', label: 'Dans plus d\'1 mois' },
  { value: 'ne-sait-pas', label: 'Je ne sais pas encore' },
]

type NoticeKind = 'info' | 'warning'

function Notice({ kind, children }: { kind: NoticeKind; children: React.ReactNode }) {
  const isWarn = kind === 'warning'
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`mt-4 rounded-2xl px-4 py-3 text-sm leading-relaxed ${
        isWarn
          ? 'bg-amber-50 border border-amber-200 text-amber-900'
          : 'bg-[#A68AFF]/8 border border-[#A68AFF]/20 text-[#1E172D]/80'
      }`}
    >
      {children}
    </motion.div>
  )
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function encodeForm(data: Record<string, string>) {
  return Object.keys(data)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}

export function FinancementSimulator() {
  const [step, setStep] = useState(0)
  const [state, setState] = useState<WizardState>(INITIAL)
  const [showResults, setShowResults] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // Hydrate from URL params on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    if (params.size === 0) return
    const next: WizardState = { ...INITIAL }
    const statut = params.get('statut') as Statut | null
    const anciennete = params.get('anciennete') as Anciennete | null
    const urssaf = params.get('urssaf') as Urssaf | null
    const budget = params.get('budget') as Budget | null
    const fiscal = params.get('fiscal') as Fiscal | null
    const tmi = params.get('tmi') as Tmi | null
    const startDate = params.get('startDate') as StartDate | null
    if (statut) next.statut = statut
    if (anciennete) next.anciennete = anciennete
    if (urssaf) next.urssaf = urssaf
    if (budget) next.budget = budget
    if (fiscal) next.fiscal = fiscal
    if (tmi) next.tmi = tmi
    if (startDate) next.startDate = startDate
    setState(next)
    if (statut && anciennete && urssaf && budget && fiscal) {
      setShowResults(true)
    }
  }, [])

  // Étapes : 5 questions de base + TMI conditionnelle + date de début (= dernière). Le résultat
  // s'affiche directement après la dernière question (plus d'étape email).
  const showTmiStep = state.fiscal === 'ir-reel'
  const stepCount = showTmiStep ? 7 : 6
  const progress = ((step + 1) / stepCount) * 100

  const update = useCallback(<K extends keyof WizardState>(key: K, val: WizardState[K]) => {
    setState(s => ({ ...s, [key]: val }))
  }, [])

  const goNext = () => setStep(s => s + 1)
  const goBack = () => setStep(s => Math.max(0, s - 1))

  // Auto-advance after selecting an option (with small delay for visual feedback)
  const selectAndAdvance = <K extends keyof WizardState>(key: K, val: WizardState[K]) => {
    update(key, val)
    setTimeout(() => goNext(), 280)
  }

  // Dernière question : on affiche directement le résultat
  const selectAndFinish = <K extends keyof WizardState>(key: K, val: WizardState[K]) => {
    update(key, val)
    setTimeout(() => setShowResults(true), 280)
  }

  const estimation = useMemo(() => computeEstimation(state), [state])

  const shareUrl = useMemo(() => {
    if (typeof window === 'undefined') return ''
    const params = new URLSearchParams()
    if (state.statut) params.set('statut', state.statut)
    if (state.anciennete) params.set('anciennete', state.anciennete)
    if (state.urssaf) params.set('urssaf', state.urssaf)
    if (state.budget) params.set('budget', state.budget)
    if (state.fiscal) params.set('fiscal', state.fiscal)
    if (state.tmi) params.set('tmi', state.tmi)
    if (state.startDate) params.set('startDate', state.startDate)
    return `${window.location.origin}/financement?${params.toString()}`
  }, [state])

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidEmail(state.email)) return
    setSubmitting(true)

    const payload = {
      'form-name': 'financement-leads',
      email: state.email,
      statut: state.statut ?? '',
      estimation: JSON.stringify({
        net: estimation.netCost,
        faf: estimation.fafName,
        fafAmount: estimation.fafAmount,
        deductibility: estimation.deductibility,
        creditImpot: estimation.creditImpot,
      }),
      consent: state.consent ? 'oui' : 'non',
    }

    // localStorage fallback + console log for webhook wiring
    try {
      localStorage.setItem('financement-lead', JSON.stringify({ ...payload, ts: Date.now() }))
    } catch {}
    // eslint-disable-next-line no-console
    console.log('[financement-lead]', payload)

    // Try Netlify Forms submission (no-op if not on Netlify)
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(payload),
      })
    } catch {}

    setSubmitting(false)
    setShowResults(true)
  }

  if (showResults) {
    return <Results estimation={estimation} shareUrl={shareUrl} />
  }

  return (
    <div className="max-w-[720px] mx-auto px-6 pt-12 pb-20">
      {/* Intro */}
      <div className="text-center mb-10">
        <h1
          className="text-3xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.1] tracking-tight mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Combien pouvez-vous{' '}
          <span className="text-[#A68AFF]">vous faire financer</span> ?
        </h1>
        <p className="text-[#1E172D]/65 text-base md:text-lg leading-relaxed max-w-[560px] mx-auto">
          En 2 minutes, découvrez le coût réel de la formation selon votre statut. FAF,
          crédit d&apos;impôt, déductibilité&nbsp;: on calcule tout pour vous.
        </p>
        <p className="text-[11px] text-[#1E172D]/45 mt-3">
          Formation certifiée Qualiopi · Organisme&nbsp;: StartPoint IA (BUTZI EURL)
        </p>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#1E172D]/45"
            style={{ fontFamily: 'var(--font-display)' }}>
            Étape {step + 1} / {stepCount}
          </span>
          <span className="text-[11px] text-[#1E172D]/45">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-1.5 bg-[#1E172D]/8 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-[#A68AFF] rounded-full"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ type: 'spring', stiffness: 200, damping: 26 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${step}-${showTmiStep}`}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.25 }}
        >
          {/* Step 0 — Statut */}
          {step === 0 && (
            <>
              <StepTitle title="Quel est votre statut ?" subtitle="Pour identifier votre FAF de rattachement." />
              <div className="space-y-2.5">
                {STATUT_OPTIONS.map(o => (
                  <OptionButton
                    key={o.value}
                    label={o.label}
                    selected={state.statut === o.value}
                    onClick={() => selectAndAdvance('statut', o.value)}
                  />
                ))}
              </div>
              {state.statut === 'sas-sasu' && (
                <Notice kind="info">
                  En tant que dirigeant assimilé salarié, vous ne relevez pas d&apos;un FAF
                  (Fonds d&apos;Assurance Formation) mais de l&apos;OPCO de votre branche. Le
                  financement est possible mais suit un circuit différent.{' '}
                  <a
                    href="mailto:contact@startpoint-ia.fr"
                    className="font-bold text-[#A68AFF] underline"
                  >
                    Nous contacter
                  </a>{' '}
                  pour qu&apos;on vous aide.
                </Notice>
              )}
              {state.statut === 'autre' && (
                <Notice kind="info">
                  Pas de souci, on peut quand même estimer votre économie fiscale. Pour le
                  financement FAF, contactez-nous et on regardera ensemble.
                </Notice>
              )}
            </>
          )}

          {/* Step 1 — Ancienneté */}
          {step === 1 && (
            <>
              <StepTitle title="Depuis combien de temps votre entreprise existe-t-elle ?" />
              <div className="space-y-2.5">
                {ANCIENNETE_OPTIONS.map(o => (
                  <OptionButton
                    key={o.value}
                    label={o.label}
                    selected={state.anciennete === o.value}
                    onClick={() => selectAndAdvance('anciennete', o.value)}
                  />
                ))}
              </div>
              {state.anciennete === 'moins-1an' && (
                <Notice kind="warning">
                  ⚠️ Les entreprises de moins d&apos;un an n&apos;ont souvent pas encore cotisé
                  de CFP (Contribution à la Formation Professionnelle). Votre FAF pourrait
                  refuser le financement. On peut quand même calculer votre économie fiscale.
                </Notice>
              )}
            </>
          )}

          {/* Step 2 — URSSAF */}
          {step === 2 && (
            <>
              <StepTitle title="Êtes-vous à jour de vos cotisations URSSAF ?" />
              <div className="space-y-2.5">
                {URSSAF_OPTIONS.map(o => (
                  <OptionButton
                    key={o.value}
                    label={o.label}
                    selected={state.urssaf === o.value}
                    onClick={() => selectAndAdvance('urssaf', o.value)}
                  />
                ))}
              </div>
              {state.urssaf === 'non' && (
                <Notice kind="warning">
                  Le versement de la CFP via l&apos;URSSAF est une condition obligatoire
                  pour le financement FAF. Régularisez votre situation avant de déposer
                  votre demande.
                </Notice>
              )}
              {state.urssaf === 'ne-sait-pas' && (
                <Notice kind="info">
                  Vous pouvez vérifier sur votre espace URSSAF (autoentrepreneur.urssaf.fr
                  ou urssaf.fr). Dans 90% des cas, si vous payez vos cotisations
                  normalement, c&apos;est bon.
                </Notice>
              )}
            </>
          )}

          {/* Step 3 — Budget */}
          {step === 3 && (
            <>
              <StepTitle title="Avez-vous déjà utilisé votre budget formation FAF cette année ?" />
              <div className="space-y-2.5">
                {BUDGET_OPTIONS.map(o => (
                  <OptionButton
                    key={o.value}
                    label={o.label}
                    selected={state.budget === o.value}
                    onClick={() => selectAndAdvance('budget', o.value)}
                  />
                ))}
              </div>
              {state.budget === 'tout' && (
                <Notice kind="info">
                  Votre enveloppe annuelle est épuisée. Vous pouvez attendre janvier
                  prochain pour une nouvelle enveloppe, ou financer directement (on
                  calcule quand même votre économie fiscale ci-dessous).
                </Notice>
              )}
              {state.budget === 'partie' && (
                <Notice kind="info">
                  Le montant disponible sera réduit. Notre estimation suppose
                  l&apos;enveloppe complète — votre montant réel pourrait être inférieur.
                </Notice>
              )}
            </>
          )}

          {/* Step 4 — Régime fiscal */}
          {step === 4 && (
            <>
              <StepTitle title="Quel est votre régime fiscal ?" />
              <div className="space-y-2.5">
                {FISCAL_OPTIONS.map(o => (
                  <OptionButton
                    key={o.value}
                    label={o.label}
                    selected={state.fiscal === o.value}
                    onClick={() => selectAndAdvance('fiscal', o.value)}
                  />
                ))}
              </div>
            </>
          )}

          {/* Step 5 — TMI (only if IR au réel) */}
          {step === 5 && showTmiStep && (
            <>
              <StepTitle title="Dans quelle tranche marginale d'imposition vous situez-vous ?" />
              <div className="space-y-2.5">
                {TMI_OPTIONS.map(o => (
                  <OptionButton
                    key={o.value}
                    label={o.label}
                    selected={state.tmi === o.value}
                    onClick={() => selectAndAdvance('tmi', o.value)}
                  />
                ))}
              </div>
            </>
          )}

          {/* Step 5 (no TMI) OR Step 6 (with TMI) — Date début */}
          {((step === 5 && !showTmiStep) || (step === 6 && showTmiStep)) && (
            <>
              <StepTitle title="Quand souhaitez-vous commencer la formation ?" />
              <div className="space-y-2.5">
                {START_OPTIONS.map(o => (
                  <OptionButton
                    key={o.value}
                    label={o.label}
                    selected={state.startDate === o.value}
                    onClick={() => selectAndFinish('startDate', o.value)}
                  />
                ))}
              </div>
              {state.startDate === 'moins-15j' && (
                <Notice kind="warning">
                  ⚠️ L&apos;AGEFICE demande un dépôt minimum 15 jours avant le début. Le
                  FIFPL et le FAFCEA ont des délais similaires. Si vous êtes pressé,{' '}
                  <a
                    href="mailto:contact@startpoint-ia.fr"
                    className="font-bold text-[#A68AFF] underline"
                  >
                    contactez-nous
                  </a>{' '}
                  — on peut parfois trouver des solutions.
                </Notice>
              )}
            </>
          )}

          {/* Email step — always last */}
          {((step === 6 && !showTmiStep) || (step === 7 && showTmiStep)) && (
            <>
              <StepTitle
                title="Où souhaitez-vous recevoir votre estimation détaillée ?"
                subtitle="Et notre guide de dépôt FAF pas à pas."
              />
              <form
                onSubmit={handleSubmitEmail}
                name="financement-leads"
                data-netlify="true"
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="financement-leads" />
                <input
                  type="email"
                  required
                  name="email"
                  value={state.email}
                  onChange={e => update('email', e.target.value)}
                  placeholder="prenom@votreentreprise.fr"
                  className="w-full px-5 py-4 rounded-2xl border-2 border-[#1E172D]/12 bg-white text-[#1E172D] text-base font-medium focus:outline-none focus:border-[#A68AFF] transition-colors"
                  style={{ fontFamily: 'var(--font-display)' }}
                />
                <label className="flex items-start gap-3 text-sm text-[#1E172D]/70 leading-relaxed cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={state.consent}
                    onChange={e => update('consent', e.target.checked)}
                    className="mt-1 w-4 h-4 accent-[#A68AFF] cursor-pointer"
                  />
                  <span>
                    J&apos;accepte de recevoir l&apos;estimation et des informations sur
                    le programme{' '}
                    <ScrambleText text="Accélération IA 360" style={{ fontFamily: 'var(--font-tech)' }} />.
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={!isValidEmail(state.email) || submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#1E172D] text-[#FFFFAB] font-bold text-base hover:bg-[#2a1f3d] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {submitting ? 'Calcul en cours…' : 'Voir mon estimation →'}
                </button>
                <p className="text-[11px] text-[#1E172D]/45 leading-relaxed text-center">
                  Vos données ne sont jamais revendues. Désabonnement en un clic.
                </p>
              </form>
            </>
          )}

          {/* Back button (not on first step) */}
          {step > 0 && (
            <div className="mt-6">
              <button
                type="button"
                onClick={goBack}
                className="text-sm text-[#1E172D]/55 hover:text-[#1E172D] font-medium cursor-pointer"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                ← Étape précédente
              </button>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function StepTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h2
        className="text-2xl md:text-3xl font-extrabold text-[#1E172D] leading-tight tracking-tight"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      {subtitle && <p className="text-[#1E172D]/55 text-sm md:text-base mt-2">{subtitle}</p>}
    </div>
  )
}
