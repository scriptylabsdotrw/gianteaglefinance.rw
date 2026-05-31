import { motion } from 'framer-motion'
import { QuoteDownIcon, FavouriteIcon } from 'hugeicons-react'
import { testimonials } from '../data/testimonials'
import SectionHeading from './ui/SectionHeading'

export default function Testimonials() {
  return (
    <section className="section-pad relative overflow-hidden bg-ivory">
      <div className="container-px relative">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by people and businesses"
          description="Real stories from clients who found clear, dependable financing with us."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="card-luxe relative flex h-full flex-col p-8 transition-colors hover:border-gold/50"
            >
              <QuoteDownIcon className="h-9 w-9 text-gold/40" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <FavouriteIcon key={s} className="h-4 w-4 text-gold" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-charcoal/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-black/[0.07] pt-6">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gold font-display text-base font-bold text-white">
                  {t.initials}
                </span>
                <span>
                  <span className="block font-semibold text-ink-black">{t.name}</span>
                  <span className="block text-xs text-gold">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
