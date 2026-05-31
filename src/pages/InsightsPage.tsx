import PageHeader from '../components/ui/PageHeader'
import Insights from '../components/Insights'
import CTABand from '../components/CTABand'

export default function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Insights & guidance from our team"
        subtitle="Practical insights to help you borrow wisely and grow with confidence."
        current="Insights"
      />
      <Insights />
      <CTABand />
    </>
  )
}
