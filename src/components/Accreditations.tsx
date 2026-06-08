import { motion } from 'framer-motion'
import { Tick02Icon } from 'hugeicons-react'
import Reveal from './ui/Reveal'

const partners = [
  {
    logo: '/Bnr_logo.jpg',
    name: 'National Bank of Rwanda',
    role: 'Central Bank · Regulatory Authority',
    badge: 'BNR',
  },
  {
    logo: '/rdbLOGO.png',
    name: 'Rwanda Development Board',
    role: 'Business Registration & Licensing',
    badge: 'RDB',
  },
  {
    logo: '/3c14622c-a915-456e-8586-393558885960.jpg',
    name: 'TransUnion Rwanda',
    role: 'Credit Bureau · Risk Assessment',
    badge: 'TU',
  },
]

export default function Accreditations() {
  return (
    <section className="relative bg-ivory py-16 sm:py-20 border-t border-b border-black/[0.07]">
      <div className="container-px">

        {/* Heading */}
        <Reveal>
          <div className="mb-12 flex flex-col items-center text-center">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-gold/40" />
              <span className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-gold/70">
                Regulated &amp; Accredited By
              </span>
              <span className="h-px w-10 bg-gold/40" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              Giant Eagle Finance operates under the full oversight of Rwanda&apos;s leading
              regulatory, registration, and credit-bureau bodies.
            </p>
          </div>
        </Reveal>

        {/* Partner cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {partners.map((p, i) => (
            <Reveal key={p.badge} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.08] bg-white transition-all duration-300 hover:border-gold/35 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]"
              >
                {/* Logo panel */}
                <div className="relative flex h-32 items-center justify-center overflow-hidden bg-white px-10 py-6">
                  <div className="pointer-events-none absolute inset-0 opacity-0 ring-1 ring-inset ring-gold/20 transition-opacity duration-300 group-hover:opacity-100" />
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="h-16 w-auto max-w-full object-contain"
                  />
                </div>

                {/* Divider */}
                <div className="h-px bg-black/[0.06]" />

                {/* Info */}
                <div className="flex items-start justify-between gap-3 px-5 py-5">
                  <div className="min-w-0">
                    <p className="font-display text-sm font-semibold leading-snug text-ink-black">
                      {p.name}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{p.role}</p>
                  </div>

                  {/* Verified badge */}
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold/10 text-gold ring-1 ring-gold/25">
                    <Tick02Icon className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        {/* Bottom note */}
        <Reveal delay={0.25}>
          <p className="mt-10 text-center text-xs text-muted/60">
            Accreditations valid as of 2026. Giant Eagle Finance Ltd · Kigali, Rwanda.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
