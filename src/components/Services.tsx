import { motion } from 'framer-motion'
import { ArrowUpRight01Icon } from 'hugeicons-react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

export default function Services() {
  return (
    <section id="services" className="section-pad relative border-y border-black/[0.07] bg-ivory">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Services"
          title="Lending solutions for every stage"
          description="From personal needs to business ambitions, choose a facility designed around real goals and structured with clear, fair terms."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group relative h-full overflow-hidden rounded-2xl border border-black/[0.08] bg-white p-7 transition-colors duration-300 hover:border-gold"
              >
                <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </span>

                <h3 className="relative mt-5 font-display text-xl font-semibold text-ink-black">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>

                <Link
                  to="/contact"
                  className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-colors hover:text-[#5c5c00]"
                >
                  Learn More
                  <ArrowUpRight01Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
