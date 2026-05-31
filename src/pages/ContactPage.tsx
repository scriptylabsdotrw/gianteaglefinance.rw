import PageHeader from '../components/ui/PageHeader'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Apply / Contact"
        title="We’re here to help"
        subtitle="Tell us what you need and our team will reach out promptly with the next steps."
        current="Contact"
      />
      <Contact />
    </>
  )
}
