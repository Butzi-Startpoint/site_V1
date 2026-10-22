import { notFound } from 'next/navigation'
import { getCahier } from '@/lib/espace/cahiers'
import { getMember } from '@/lib/espace/session'
import { CahierForm } from './cahier-form'

export default async function CahierPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = await getMember()
  const cahier = getCahier(slug)
  if (!member || !cahier) notFound()
  return <CahierForm cahier={cahier} memberId={member.id} memberName={member.name} />
}
