import { motion } from 'framer-motion'
import { SecurityCheckIcon, FlashIcon, EyeIcon, AnalyticsUpIcon } from 'hugeicons-react'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import type { IconType } from './ui/icon'

interface Value {
  icon: IconType
  title: string
  description: string
}

const values: Value[] = [
  {
    icon: SecurityCheckIcon,
    title: 'Trust',
    description: 'Responsible lending built on integrity, clear communication, and lasting relationships.',
  },
  {
    icon: FlashIcon,
    title: 'Speed',
    description: 'Efficient reviews and prompt decisions so you can act when opportunity calls.',
  },
  {
    icon: EyeIcon,
    title: 'Transparency',
    description: 'Honest terms with no hidden fees — you always know exactly what you are agreeing to.',
  },
  {
    icon: AnalyticsUpIcon,
    title: 'Growth',
    description: 'Financing structured to help individuals and businesses move steadily forward.',
  },
]

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="container-px">
        <SectionHeading
          eyebrow="About Us"
          title="A lending partner built on confidence and care"
          description="GIANT EAGLE FINANCE supports people and businesses with accessible, responsible, and reliable lending solutions — combining the discipline of a serious institution with the attentiveness of a trusted advisor."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="card-luxe group h-full p-7 transition-colors hover:border-gold/50"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-colors group-hover:bg-gold group-hover:text-white">
                  <value.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink-black">{value.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{value.description}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
