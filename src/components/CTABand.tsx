import { ArrowRight01Icon } from 'hugeicons-react'
import { Link } from 'react-router-dom'
import Reveal from './ui/Reveal'

/** Reusable "ready to apply" call-to-action band used at the foot of pages. */
export default function CTABand() {
  return (
    <section className="section-pad bg-white">
      <div className="container-px">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-ink-black px-8 py-14 text-center sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                Ready to take the next step?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ivory/70">
                Start your loan inquiry today and our team will guide you through clear, fair terms.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/contact" className="btn-gold">
                  Apply for a Loan
                  <ArrowRight01Icon className="h-4 w-4" />
                </Link>
                <Link
                  to="/calculator"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur transition-colors hover:border-white/60 hover:bg-white/10"
                >
                  Use the Calculator
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
