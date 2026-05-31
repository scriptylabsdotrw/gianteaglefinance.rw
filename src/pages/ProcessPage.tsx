import PageHeader from '../components/ui/PageHeader'
import LoanProcess from '../components/LoanProcess'
import CTABand from '../components/CTABand'

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="How It Works"
        title="Simple steps, professional support"
        subtitle="A clear path from application to funding, with our team beside you at every stage."
        current="Process"
      />
      <LoanProcess />
      <CTABand />
    </>
  )
}
