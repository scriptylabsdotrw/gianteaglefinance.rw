import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Call02Icon,
  Mail01Icon,
  MapPinIcon,
  Clock01Icon,
  CheckmarkCircle02Icon,
  Navigation03Icon,
} from 'hugeicons-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const loanTypes = [
  'Personal Loan',
  'Salary Advance',
  'Business Loan',
  'SME Financing',
  'Emergency Loan',
  'Loan Advisory',
]

const contactDetails = [
  { icon: Call02Icon, label: 'Phone', value: '+250 788 329 056' },
  { icon: Mail01Icon, label: 'Email', value: 'info@gianteaglefinance.com' },
  { icon: MapPinIcon, label: 'Location', value: 'Kigali, Rwanda' },
  { icon: Clock01Icon, label: 'Working Hours', value: 'Mon – Fri, 8:00 AM – 5:00 PM' },
]

const inputClass =
  'w-full rounded-xl border border-black/15 bg-white px-4 py-3 text-sm text-ink-black placeholder:text-muted/60 outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-pad relative overflow-hidden bg-white">
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Apply / Contact"
          title="Start your loan inquiry today"
          description="Tell us what you need and our team will reach out promptly with the next steps."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact details */}
          <Reveal>
            <div className="card-luxe h-full p-8">
              <h3 className="font-display text-xl font-semibold text-ink-black">Get in touch</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Reach out directly or send your inquiry — we respond within working hours.
              </p>
              <ul className="mt-8 space-y-5">
                {contactDetails.map((d) => (
                  <li key={d.label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-muted">
                        {d.label}
                      </span>
                      <span className="mt-0.5 block text-sm font-medium text-ink-black">{d.value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="card-luxe relative overflow-hidden p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex h-full flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
                      className="grid h-20 w-20 place-items-center rounded-full bg-emerald-50 text-emerald-600"
                    >
                      <CheckmarkCircle02Icon className="h-10 w-10" />
                    </motion.span>
                    <h3 className="mt-6 font-display text-2xl font-semibold text-ink-black">Thank you</h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                      Your loan inquiry has been received. Our team will contact you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-outline mt-8"
                    >
                      Submit another inquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="grid gap-5 sm:grid-cols-2"
                  >
                    <div className="sm:col-span-1">
                      <label htmlFor="fullName" className="mb-2 block text-sm text-muted">
                        Full Name
                      </label>
                      <input id="fullName" name="fullName" type="text" required placeholder="Your full name" className={inputClass} />
                    </div>
                    <div className="sm:col-span-1">
                      <label htmlFor="phone" className="mb-2 block text-sm text-muted">
                        Phone Number
                      </label>
                      <input id="phone" name="phone" type="tel" required placeholder="+250 ..." className={inputClass} />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="email" className="mb-2 block text-sm text-muted">
                        Email Address
                      </label>
                      <input id="email" name="email" type="email" required placeholder="you@example.com" className={inputClass} />
                    </div>
                    <div className="sm:col-span-1">
                      <label htmlFor="loanType" className="mb-2 block text-sm text-muted">
                        Loan Type
                      </label>
                      <select id="loanType" name="loanType" required defaultValue="" className={`${inputClass} appearance-none`}>
                        <option value="" disabled>
                          Select a loan type
                        </option>
                        {loanTypes.map((t) => (
                          <option key={t} value={t} className="bg-white">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-1">
                      <label htmlFor="loanAmount" className="mb-2 block text-sm text-muted">
                        Loan Amount (RWF)
                      </label>
                      <input id="loanAmount" name="loanAmount" type="number" min="0" placeholder="e.g. 5,000,000" className={inputClass} />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="mb-2 block text-sm text-muted">
                        Message
                      </label>
                      <textarea id="message" name="message" rows={4} placeholder="Tell us a little about your needs..." className={`${inputClass} resize-none`} />
                    </div>
                    <div className="sm:col-span-2">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-gold w-full"
                      >
                        Submit Inquiry
                        <Navigation03Icon className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
