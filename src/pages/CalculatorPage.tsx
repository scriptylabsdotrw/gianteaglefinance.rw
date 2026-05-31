import PageHeader from '../components/ui/PageHeader'
import LoanCalculator from '../components/LoanCalculator'
import CTABand from '../components/CTABand'

export default function CalculatorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Loan Calculator"
        title="Plan your repayment with confidence"
        subtitle="Adjust the amount, rate, and term to preview your figures — a clear picture before you apply."
        current="Loan Calculator"
      />
      <LoanCalculator />
      <CTABand />
    </>
  )
}
