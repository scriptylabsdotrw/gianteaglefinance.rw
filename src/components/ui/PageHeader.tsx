import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight01Icon } from 'hugeicons-react'

interface PageHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  current: string
}

const HEADER_IMAGE =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80'

/** Dark banner shown at the top of every inner page. */
export default function PageHeader({ eyebrow, title, subtitle, current }: PageHeaderProps) {
  return (
    <section className="relative bg-white px-3 pt-24 sm:px-5 sm:pt-28 lg:pt-32">
      <div className="relative mx-auto w-full max-w-[88rem] overflow-hidden rounded-[1.75rem] border border-black/[0.06] sm:rounded-[2.25rem]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HEADER_IMAGE}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink-black/80" aria-hidden="true" />

        <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            {eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-5 max-w-3xl font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/75 sm:text-lg"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mt-8 flex items-center gap-2 text-sm text-ivory/60"
          >
            <Link to="/" className="transition-colors hover:text-gold">
              Home
            </Link>
            <ArrowRight01Icon className="h-3.5 w-3.5" />
            <span className="font-medium text-gold">{current}</span>
          </nav>
        </div>
      </div>
    </section>
  )
}
