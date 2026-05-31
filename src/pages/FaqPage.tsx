import PageHeader from '../components/ui/PageHeader'
import FAQ from '../components/FAQ'
import CTABand from '../components/CTABand'

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Helpful answers before you borrow"
        subtitle="Everything you need to know before you apply. Still curious? Our team is happy to help."
        current="FAQ"
      />
      <FAQ />
      <CTABand />
    </>
  )
}
