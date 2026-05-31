import PageHeader from '../components/ui/PageHeader'
import Services from '../components/Services'
import FeatureRows from '../components/FeatureRows'
import CTABand from '../components/CTABand'

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Services"
        title="Financing for every ambition"
        subtitle="From personal needs to business ambitions, choose a facility designed around real goals and structured with clear, fair terms."
        current="Services"
      />
      <Services />
      <FeatureRows />
      <CTABand />
    </>
  )
}
