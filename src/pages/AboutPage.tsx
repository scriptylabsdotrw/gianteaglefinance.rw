import PageHeader from '../components/ui/PageHeader'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import CTABand from '../components/CTABand'

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Responsible lending, built on trust"
        subtitle="GIANT EAGLE FINANCE supports people and businesses with accessible, responsible, and reliable lending solutions."
        current="About"
      />
      <About />
      <WhyChooseUs />
      <Testimonials />
      <CTABand />
    </>
  )
}
