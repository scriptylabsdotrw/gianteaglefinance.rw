import { motion } from 'framer-motion'
import { Clock01Icon, File01Icon, RepeatIcon, SquareLock01Icon, Building03Icon } from 'hugeicons-react'

const items = [
  { icon: Clock01Icon, label: 'Quick Review' },
  { icon: File01Icon, label: 'Transparent Terms' },
  { icon: RepeatIcon, label: 'Flexible Repayment' },
  { icon: SquareLock01Icon, label: 'Confidential Service' },
  { icon: Building03Icon, label: 'Business Support' },
]

export default function TrustBar() {
  return (
    <section className="relative mt-16 border-y border-black/[0.07] bg-ivory sm:mt-20">
      <div className="container-px">
        <ul className="grid grid-cols-2 divide-x divide-y divide-black/[0.06] sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0">
          {items.map((it, i) => (
            <motion.li
              key={it.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center justify-center gap-3 px-4 py-6 text-center"
            >
              <it.icon className="h-5 w-5 shrink-0 text-gold" />
              <span className="text-sm font-medium text-ink-charcoal">{it.label}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
