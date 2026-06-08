import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight01Icon } from 'hugeicons-react'

interface PageHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  current: string
  stats?: Array<{ value: string; label: string }>
}

/** Dark banner shown at the top of every inner page. */
export default function PageHeader({ eyebrow, title, subtitle, current, stats }: PageHeaderProps) {
  return (
    <section className="relative bg-white pt-24 sm:pt-28 lg:pt-32">
      <div className="relative w-full overflow-hidden">
        {/* Dark interior / architecture background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink-black/85" aria-hidden="true" />
        {/* Decorative gold curves */}
        <svg
          className="pointer-events-none absolute inset-x-0 top-0 h-full w-full opacity-[0.18]"
          viewBox="0 0 1200 500"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path d="M1240 100 C840 180 720 320 600 420" stroke="#8f8f1a" strokeWidth="1.5" />
          <path d="M1280 200 C920 260 760 380 660 480" stroke="#8f8f1a" strokeWidth="1.5" />
          <path d="M-40 100 C360 180 480 320 600 420" stroke="#8f8f1a" strokeWidth="1.5" />
          <path d="M600 0 C560 120 540 260 600 420" stroke="#8f8f1a" strokeWidth="1" />
        </svg>

        <div className="relative mx-auto max-w-[88rem] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">

          {/* Breadcrumb — top */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45 }}
            aria-label="Breadcrumb"
            className="mb-7 flex items-center gap-2 text-sm text-ivory/50"
          >
            <Link to="/" className="transition-colors hover:text-gold">Home</Link>
            <ArrowRight01Icon className="h-3.5 w-3.5 opacity-50" />
            <span className="font-medium text-gold">{current}</span>
          </motion.nav>

          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="eyebrow"
          >
            {eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/70 sm:text-lg"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Optional stats strip */}
          {stats && stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-white/[0.12] pt-8"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-white sm:text-3xl">{s.value}</p>
                  <p className="mt-0.5 text-xs text-ivory/45">{s.label}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
