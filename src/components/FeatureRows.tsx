import { motion } from 'framer-motion'
import {
  ArrowRight01Icon,
  Tick02Icon,
  User03Icon,
  Building03Icon,
  Wallet01Icon,
  AnalyticsUpIcon,
  SecurityCheckIcon,
  Clock01Icon,
} from 'hugeicons-react'
import { Link } from 'react-router-dom'
import Reveal from './ui/Reveal'
import type { IconType } from './ui/icon'

interface Feature {
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  icon: IconType
  /** Big number shown on the visual panel, e.g. "RWF 15M". */
  stat: string
  statLabel: string
}

const features: Feature[] = [
  {
    eyebrow: 'For Individuals',
    title: 'Personal loans built around your life',
    description:
      'Whether it’s home improvements, education, or a major purchase, access funds with clear, fair terms and a repayment plan that fits your income.',
    bullets: ['Flexible amounts up to RWF 50M', 'Repayment up to 36 months', 'No hidden fees, ever'],
    icon: User03Icon,
    stat: 'RWF 50M',
    statLabel: 'Maximum facility',
  },
  {
    eyebrow: 'For Businesses & SMEs',
    title: 'Capital to launch, expand, and stabilise',
    description:
      'Business loans and SME financing structured around your cash flow — for working capital, equipment, and growth, with professional support throughout.',
    bullets: ['Working capital & expansion', 'Tailored to your cash flow', 'Dedicated business advisory'],
    icon: Building03Icon,
    stat: '24hr',
    statLabel: 'Initial review',
  },
  {
    eyebrow: 'For Employees',
    title: 'Salary advances before payday',
    description:
      'Bridge the gap with quick access to a portion of your salary. A simple, transparent process with straightforward repayment you can rely on.',
    bullets: ['Fast, confidential review', 'Transparent repayment', 'Respectful, professional service'],
    icon: Wallet01Icon,
    stat: '100%',
    statLabel: 'Confidential',
  },
]

function VisualPanel({ feature }: { feature: Feature }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-black/[0.07] bg-ivory p-8 sm:p-10">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />

      <div className="relative flex items-center justify-between">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold text-white">
          <feature.icon className="h-7 w-7" />
        </span>
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-gold/40 bg-white text-gold">
          <AnalyticsUpIcon className="h-5 w-5" />
        </span>
      </div>

      <div className="relative mt-8 rounded-2xl border border-black/[0.07] bg-white p-6">
        <p className="text-xs uppercase tracking-[0.28em] text-gold">{feature.statLabel}</p>
        <p className="mt-2 font-display text-4xl font-bold text-ink-black">{feature.stat}</p>

        {/* Flat mini progress bars */}
        <div className="mt-6 space-y-3">
          {[88, 64, 76].map((w, i) => (
            <div key={i} className="h-2 w-full overflow-hidden rounded-full bg-black/[0.06]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${w}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 + i * 0.12, ease: 'easeOut' }}
                className="h-full rounded-full bg-gold"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-2 gap-4">
        <div className="flex items-center gap-2 rounded-xl border border-black/[0.07] bg-white px-4 py-3">
          <SecurityCheckIcon className="h-4 w-4 text-gold" />
          <span className="text-xs font-medium text-ink-charcoal">Secure</span>
        </div>
        <div className="flex items-center gap-2 rounded-xl border border-black/[0.07] bg-white px-4 py-3">
          <Clock01Icon className="h-4 w-4 text-gold" />
          <span className="text-xs font-medium text-ink-charcoal">Fast review</span>
        </div>
      </div>
    </div>
  )
}

export default function FeatureRows() {
  return (
    <section className="section-pad relative bg-white">
      <div className="container-px space-y-20 lg:space-y-28">
        {features.map((feature, i) => {
          const reversed = i % 2 === 1
          return (
            <div
              key={feature.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* Text */}
              <Reveal className={reversed ? 'lg:order-2' : ''}>
                <span className="eyebrow">{feature.eyebrow}</span>
                <h3 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink-black sm:text-4xl">
                  {feature.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted">{feature.description}</p>
                <ul className="mt-7 space-y-3">
                  {feature.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-white">
                        <Tick02Icon className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-ink-charcoal">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-gold mt-8">
                  Access more
                  <ArrowRight01Icon className="h-4 w-4" />
                </Link>
              </Reveal>

              {/* Visual */}
              <Reveal delay={0.1} className={reversed ? 'lg:order-1' : ''}>
                <VisualPanel feature={feature} />
              </Reveal>
            </div>
          )
        })}
      </div>
    </section>
  )
}
