import { motion } from 'framer-motion'
import { Tick02Icon } from 'hugeicons-react'
import Reveal from './ui/Reveal'
import { useCountUp } from './ui/useCountUp'

const reasons = [
  'Fast application process',
  'Flexible repayment options',
  'Clear loan terms',
  'Professional customer care',
  'Support for individuals and SMEs',
  'Secure and confidential handling',
]

interface Stat {
  value: string
  label: string
  /** Numeric portion to count up, with optional prefix/suffix around it. */
  count?: { to: number; prefix?: string; suffix?: string }
}

const stats: Stat[] = [
  { value: '24hr', label: 'Application Review', count: { to: 24, suffix: 'hr' } },
  { value: '100%', label: 'Flexible Terms', count: { to: 100, suffix: '%' } },
  { value: 'SME', label: 'Business Support' },
  { value: 'Trusted', label: 'Confidential Service' },
]

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const { ref, value } = useCountUp(stat.count?.to ?? 0)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-2xl border border-black/[0.08] bg-ivory p-6 text-center"
    >
      <p className="font-display text-4xl font-bold text-gold">
        {stat.count ? (
          <span ref={ref}>
            {stat.count.prefix}
            {value}
            {stat.count.suffix}
          </span>
        ) : (
          stat.value
        )}
      </p>
      <p className="mt-2 text-sm text-muted">{stat.label}</p>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="section-pad relative overflow-hidden bg-white">
      <div className="container-px relative grid gap-14 lg:grid-cols-2 lg:items-center">
        {/* Left: reasons */}
        <div>
          <Reveal>
            <span className="eyebrow">Why Choose Us</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-5 max-w-lg font-display text-3xl font-semibold leading-tight text-ink-black sm:text-4xl">
              Built to earn your trust, designed to support your growth
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              We pair the rigour of a serious financial institution with a genuinely human approach —
              so borrowing feels clear, dignified, and dependable.
            </p>
          </Reveal>

          <ul className="mt-9 grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <Reveal as="li" key={reason} delay={i * 0.06} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold text-white">
                  <Tick02Icon className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm text-ink-charcoal">{reason}</span>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* Right: animated stats */}
        <div className="grid grid-cols-2 gap-5">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
