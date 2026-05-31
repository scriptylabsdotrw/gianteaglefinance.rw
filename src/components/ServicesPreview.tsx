import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight01Icon } from 'hugeicons-react'
import { services } from '../data/services'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

/** A condensed 3-card glimpse of services for the homepage, linking to the full page. */
export default function ServicesPreview() {
  const preview = services.slice(0, 3)
  return (
    <section className="section-pad relative border-y border-black/[0.07] bg-ivory">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Services"
          title="Lending solutions for every stage"
          description="From personal needs to business ambitions, choose a facility designed around real goals."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {preview.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group h-full rounded-2xl border border-black/[0.08] bg-white p-7 transition-colors hover:border-gold"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink-black">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-12 text-center">
          <Link to="/services" className="btn-gold">
            View All Services
            <ArrowRight01Icon className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
