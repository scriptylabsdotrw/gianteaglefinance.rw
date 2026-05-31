import { motion } from 'framer-motion'
import {
  ArrowRight01Icon,
  SecurityCheckIcon,
  AnalyticsUpIcon,
  CheckmarkCircle02Icon,
} from 'hugeicons-react'
import { MotionLink } from './ui/MotionLink'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
}

// Corporate finance background (Unsplash)
const HERO_IMAGE =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80'

const stats = [
  { value: 'RWF 50M', label: 'Maximum facility' },
  { value: '24 hrs', label: 'Initial review' },
  { value: '36 mo', label: 'Flexible terms' },
  { value: '100%', label: 'Confidential' },
]

export default function Hero() {
  return (
    <section id="home" className="relative bg-white px-3 pt-24 sm:px-5 sm:pt-28 lg:pt-32">
      <div className="relative mx-auto w-full max-w-[88rem] overflow-hidden rounded-[1.75rem] border border-black/[0.06] sm:rounded-[2.25rem]">
        {/* Background image + solid overlay (no gradient) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${HERO_IMAGE}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-ink-black/80" aria-hidden="true" />

        {/* Decorative gold eagle-inspired curves */}
        <svg
          className="pointer-events-none absolute inset-x-0 top-0 h-full w-full opacity-[0.13]"
          viewBox="0 0 1200 600"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <path d="M1240 120 C840 200 720 360 600 460" stroke="#8f8f1a" strokeWidth="1.5" />
          <path d="M1280 220 C920 280 760 420 660 520" stroke="#8f8f1a" strokeWidth="1.5" />
          <path d="M-40 120 C360 200 480 360 600 460" stroke="#8f8f1a" strokeWidth="1.5" />
        </svg>

        {/* Content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="relative mx-auto max-w-3xl px-6 py-20 text-center sm:px-10 sm:py-24 lg:py-32"
        >
          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl"
          >
            Fast, Trusted Financing for{' '}
            <span className="text-gold-bright">Personal and Business Growth</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ivory/75 sm:text-lg"
          >
            GIANT EAGLE FINANCE provides reliable lending solutions for individuals, employees,
            entrepreneurs, and growing businesses — with clear terms and professional support.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="btn-gold w-full sm:w-auto"
            >
              Apply for a Loan
              <ArrowRight01Icon className="h-4 w-4" />
            </MotionLink>
            <MotionLink
              to="/services"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold tracking-wide text-white backdrop-blur transition-colors hover:border-white/60 hover:bg-white/10 sm:w-auto"
            >
              View Loan Options
            </MotionLink>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-ivory/70"
          >
            <span className="flex items-center gap-2">
              <SecurityCheckIcon className="h-4 w-4 text-gold-bright" /> Secure &amp; Confidential
            </span>
            <span className="flex items-center gap-2">
              <CheckmarkCircle02Icon className="h-4 w-4 text-gold-bright" /> 24-Hour Review
            </span>
            <span className="flex items-center gap-2">
              <AnalyticsUpIcon className="h-4 w-4 text-gold-bright" /> Flexible Terms
            </span>
          </motion.div>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative grid grid-cols-2 divide-x divide-white/10 border-t border-white/10 sm:grid-cols-4"
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-4 py-7 text-center ${i >= 2 ? 'border-t border-white/10 sm:border-t-0' : ''}`}
            >
              <p className="font-display text-2xl font-bold text-gold-bright sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wider text-ivory/55">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
