import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight01Icon } from 'hugeicons-react'
import { loanProducts } from '../data/loanProducts'
import Reveal from './ui/Reveal'

export default function LoanProducts() {
  return (
    <section id="loan-products" className="section-pad relative bg-ink-black">
      <div className="gold-divider" />

      <div className="container-px">

        {/* Section heading */}
        <Reveal>
          <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <span className="eyebrow">Loan Products</span>
              <h2 className="mt-4 max-w-xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Find the right facility for you
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/45 sm:text-right sm:text-base">
              Ten tailored products — personal, business, agricultural, and beyond.
            </p>
          </div>
        </Reveal>

        {/* Product grid — 1 col mobile, 2 cols sm+ */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {loanProducts.map((product, i) => (
            <Reveal key={product.title} delay={(i % 2) * 0.06}>
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group flex items-start gap-0 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] transition-all duration-300 hover:border-gold/35 hover:bg-white/[0.06]"
              >
                {/* Left icon column */}
                <div className="flex w-[4.5rem] shrink-0 flex-col items-center gap-2 px-0 pb-5 pt-6 sm:w-20">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold ring-1 ring-gold/20 transition-all duration-300 group-hover:bg-gold group-hover:text-white group-hover:ring-gold">
                    <product.icon className="h-5 w-5" />
                  </span>
                  <span className="font-mono text-[0.55rem] tabular-nums text-white/20">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 border-l border-white/[0.06] p-5">
                  <div>
                    <div className="flex flex-wrap items-start gap-2">
                      <h3 className="font-display text-base font-semibold leading-snug text-white sm:text-[1.05rem]">
                        {product.title}
                      </h3>
                      {product.tag && (
                        <span className="mt-0.5 rounded-full bg-gold/15 px-2.5 py-0.5 text-[0.58rem] font-bold uppercase tracking-wider text-gold">
                          {product.tag}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-white/42">
                      {product.description}
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="mt-auto flex items-center gap-1.5 text-xs font-semibold text-gold/55 transition-colors duration-200 hover:text-gold"
                  >
                    Apply for this loan
                    <ArrowRight01Icon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.12}>
          <div className="mt-12 flex flex-col items-center gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-8 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-display text-base font-semibold text-white">
                Not sure which product fits?
              </p>
              <p className="mt-1 text-sm text-white/40">
                Our advisors will review your situation and recommend the right facility.
              </p>
            </div>
            <Link to="/contact" className="btn-gold shrink-0">
              Talk to an Advisor
              <ArrowRight01Icon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="gold-divider mt-0 absolute bottom-0 left-0 right-0" />
    </section>
  )
}
