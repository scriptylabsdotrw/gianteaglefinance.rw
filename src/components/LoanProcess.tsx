import { motion } from 'framer-motion'
import { PencilEdit01Icon, Search01Icon, CheckmarkCircle02Icon, Money01Icon } from 'hugeicons-react'
import SectionHeading from './ui/SectionHeading'
import type { IconType } from './ui/icon'

interface Step {
  icon: IconType
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: PencilEdit01Icon,
    title: 'Submit Application',
    description: 'Share your details and loan needs through our simple inquiry form.',
  },
  {
    icon: Search01Icon,
    title: 'Document Review',
    description: 'Our team verifies your information promptly and confidentially.',
  },
  {
    icon: CheckmarkCircle02Icon,
    title: 'Loan Approval',
    description: 'Receive a clear decision with transparent, agreed-upon terms.',
  },
  {
    icon: Money01Icon,
    title: 'Receive Funds',
    description: 'Approved funds are disbursed quickly so you can move forward.',
  },
]

export default function LoanProcess() {
  return (
    <section id="process" className="section-pad relative border-y border-black/[0.07] bg-ivory">
      <div className="container-px">
        <SectionHeading
          eyebrow="How It Works"
          title="A clear path from application to funding"
          description="Four straightforward steps, with professional support at every stage."
        />

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-20 hidden lg:block">
          <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-gold/40 bg-white text-gold">
                  <step.icon className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-gold text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-ink-black">{step.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: vertical stepper */}
        <div className="relative mt-14 lg:hidden">
          <div className="absolute bottom-4 left-8 top-4 w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent" />
          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative flex items-start gap-5"
              >
                <span className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-gold/40 bg-white text-gold">
                  <step.icon className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-gold text-xs font-bold text-white">
                    {i + 1}
                  </span>
                </span>
                <div className="pt-1.5">
                  <h3 className="font-display text-lg font-semibold text-ink-black">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
