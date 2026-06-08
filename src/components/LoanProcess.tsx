import { Fragment, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  PencilEdit01Icon,
  Search01Icon,
  CheckmarkCircle02Icon,
  Money01Icon,
  ArrowRight01Icon,
} from 'hugeicons-react'
import type { IconType } from './ui/icon'

interface Step {
  icon: IconType
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: PencilEdit01Icon,
    title: 'Submit Application',
    description:
      'Share your details and loan needs through our simple inquiry form. No paperwork maze — just the essentials.',
  },
  {
    icon: Search01Icon,
    title: 'Document Review',
    description:
      'Our team verifies your information promptly and confidentially. We aim to complete initial review within 24 hours.',
  },
  {
    icon: CheckmarkCircle02Icon,
    title: 'Loan Approval',
    description:
      'Receive a clear decision with transparent, agreed-upon terms. No hidden charges — what you see is what you sign.',
  },
  {
    icon: Money01Icon,
    title: 'Receive Funds',
    description:
      'Approved funds are disbursed quickly so you can move forward with confidence. Your journey starts here.',
  },
]

// Outer height drives scroll budget: (steps.length − 1) × 100 vh of scroll travel
const OUTER_HEIGHT_VH = steps.length * 100
const TRACK_END_PCT = `-${((steps.length - 1) / steps.length) * 100}%`

export default function LoanProcess() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setActiveStep(Math.round(v * (steps.length - 1)))
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.001,
  })

  const x = useTransform(smoothProgress, [0, 1], ['0%', TRACK_END_PCT])
  const hintOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])

  return (
    <div
      ref={containerRef}
      id="process"
      style={{ height: `${OUTER_HEIGHT_VH}vh` }}
      className="relative"
    >
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-white">

        {/* ── Header bar ── */}
        <div className="container-px shrink-0 flex items-start justify-between gap-8 border-b border-black/[0.07] py-5 pt-20 sm:pt-24 lg:pt-28">
          <div>
            <span className="eyebrow">How It Works</span>
            <h2 className="mt-3 font-display text-xl font-bold leading-tight text-ink-black sm:text-2xl lg:text-3xl">
              A clear path from application to funding
            </h2>
          </div>

          {/* Step progress tracker — circles + connecting lines */}
          <div className="hidden shrink-0 items-center sm:flex">
            {steps.map((s, i) => (
              <Fragment key={s.title}>
                <div className="flex flex-col items-center gap-1.5">
                  <motion.div
                    animate={{
                      backgroundColor: i <= activeStep ? '#757500' : 'rgba(0,0,0,0.10)',
                      scale: i === activeStep ? 1.25 : 1,
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="h-3 w-3 rounded-full"
                  />
                  <span
                    className={`text-[0.58rem] font-semibold uppercase tracking-wider transition-colors duration-300 ${
                      i === activeStep ? 'text-gold' : 'text-muted/35'
                    }`}
                  >
                    {s.title.split(' ')[0]}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <motion.div
                    animate={{ backgroundColor: i < activeStep ? '#757500' : 'rgba(0,0,0,0.10)' }}
                    transition={{ duration: 0.4 }}
                    className="mx-1.5 h-px w-10 lg:w-16"
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {/* ── Horizontal track ── */}
        <div className="flex flex-1 overflow-hidden min-h-0">
          <motion.div
            style={{ x, width: `${steps.length * 100}vw` }}
            className="flex h-full"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                animate={{ opacity: i === activeStep ? 1 : 0.38 }}
                transition={{ duration: 0.4 }}
                className="flex h-full w-screen items-stretch"
              >
                {/* ── Dark left panel (hidden on mobile) ── */}
                <div className="hidden sm:flex sm:w-[38%] flex-col justify-between bg-ink-black px-8 sm:px-12 lg:px-16 py-10">
                  {/* Ghost step number */}
                  <span
                    className="pointer-events-none select-none font-display font-bold leading-none text-white/[0.04]"
                    style={{ fontSize: 'clamp(5.5rem, 11vw, 9.5rem)' }}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>

                  {/* Icon */}
                  <div>
                    <span className="grid h-16 w-16 place-items-center rounded-2xl bg-gold/15 text-gold ring-1 ring-gold/25">
                      <step.icon className="h-8 w-8" />
                    </span>
                  </div>

                  {/* Mini step list — shows all steps, highlights current */}
                  <ul className="space-y-3">
                    {steps.map((s, si) => (
                      <li
                        key={s.title}
                        className={`flex items-center gap-3 text-sm transition-colors duration-300 ${
                          si === i ? 'text-white' : 'text-white/22'
                        }`}
                      >
                        <span
                          className={`h-2 w-2 shrink-0 rounded-full transition-colors duration-300 ${
                            si < i ? 'bg-gold/55' : si === i ? 'bg-gold' : 'bg-white/15'
                          }`}
                        />
                        {s.title}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ── Ivory right panel ── */}
                <div className="flex flex-1 flex-col justify-center bg-ivory px-8 sm:px-12 lg:px-16 py-12">
                  {/* Mobile: icon since left panel is hidden */}
                  <span className="mb-7 grid h-14 w-14 place-items-center rounded-2xl bg-gold/10 text-gold ring-1 ring-gold/20 sm:hidden">
                    <step.icon className="h-7 w-7" />
                  </span>

                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold/70">
                    Step {i + 1} of {steps.length}
                  </span>

                  <motion.h3
                    animate={{
                      y: i === activeStep ? 0 : 28,
                      opacity: i === activeStep ? 1 : 0,
                    }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-5 font-display text-3xl font-bold leading-tight text-ink-black sm:text-4xl lg:text-5xl"
                  >
                    {step.title}
                  </motion.h3>

                  <motion.p
                    animate={{
                      y: i === activeStep ? 0 : 18,
                      opacity: i === activeStep ? 1 : 0,
                    }}
                    transition={{ duration: 0.55, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg"
                  >
                    {step.description}
                  </motion.p>

                  <motion.div
                    animate={{ opacity: i === activeStep ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: 0.12 }}
                    className="mt-auto pt-10"
                  >
                    {i < steps.length - 1 ? (
                      <p className="flex items-center gap-2 text-sm text-muted/50">
                        <span>Next</span>
                        <ArrowRight01Icon className="h-4 w-4 text-gold/40" />
                        <span className="font-medium text-muted/80">{steps[i + 1].title}</span>
                      </p>
                    ) : (
                      <Link to="/contact" className="btn-gold w-fit">
                        Apply Now
                        <ArrowRight01Icon className="h-4 w-4" />
                      </Link>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          aria-hidden="true"
        >
          <span className="text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-muted/40">
            Scroll to explore
          </span>
          <motion.div
            animate={{ scaleY: [0.5, 1, 0.5], opacity: [0.35, 0.8, 0.35] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="h-5 w-px origin-top bg-gold/40"
          />
        </motion.div>
      </div>
    </div>
  )
}
