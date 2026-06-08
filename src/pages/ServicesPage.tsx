import PageHeader from '../components/ui/PageHeader'
import LoanProducts from '../components/LoanProducts'
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
        stats={[
          { value: '10', label: 'Loan Products' },
          { value: '24 hrs', label: 'Approval Decision' },
          { value: 'BNR', label: 'Regulated & Licensed' },
          { value: '100%', label: 'Rwanda-Based' },
        ]}
      />
      <LoanProducts />
      <FeatureRows />
      <CTABand />
    </>
  )
}
