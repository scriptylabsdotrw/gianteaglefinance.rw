import Hero from '../components/Hero'
import QuickAccess from '../components/QuickAccess'
import TrustBar from '../components/TrustBar'
import ServicesPreview from '../components/ServicesPreview'
import LoanCalculator from '../components/LoanCalculator'
import LoanProcess from '../components/LoanProcess'
import FAQ from '../components/FAQ'
import CTABand from '../components/CTABand'
import Accreditations from '../components/Accreditations'

export default function Home() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <TrustBar />
      <ServicesPreview />
      <LoanCalculator />
      <LoanProcess />
      <FAQ />
      <CTABand />
      <Accreditations />
    </>
  )
}
