import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator01Icon, InformationCircleIcon } from 'hugeicons-react'
import { Link } from 'react-router-dom'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'

const fmt = (n: number) =>
  new Intl.NumberFormat('en-RW', { maximumFractionDigits: 0 }).format(Math.round(n))

interface SliderFieldProps {
  label: string
  value: number
  min: number
  max: number
  step: number
  unit: string
  onChange: (v: number) => void
  format?: (v: number) => string
}

function SliderField({ label, value, min, max, step, unit, onChange, format }: SliderFieldProps) {
  const pct = ((value - min) / (max - min)) * 100
  const id = label.replace(/\s+/g, '-').toLowerCase()
  return (
    <div>
      <div className="flex items-end justify-between">
        <label htmlFor={id} className="text-sm font-medium text-muted">
          {label}
        </label>
        <span className="font-display text-lg font-semibold text-gold">
          {format ? format(value) : value}
          <span className="ml-1 text-xs font-normal text-muted">{unit}</span>
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full outline-none
          [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gold
          [&::-webkit-slider-thumb]:transition-transform
          [&::-webkit-slider-thumb]:hover:scale-110
          [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-gold"
        style={{
          background: `linear-gradient(90deg, #757500 ${pct}%, rgba(0,0,0,0.1) ${pct}%)`,
        }}
      />
    </div>
  )
}

function ResultRow({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) {
  return (
    <motion.div
      key={value}
      initial={{ opacity: 0.4, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={`flex items-center justify-between rounded-xl px-5 py-4 ${
        highlight ? 'bg-gold text-white' : 'border border-black/[0.07] bg-white'
      }`}
    >
      <span className={`text-sm ${highlight ? 'font-semibold' : 'text-muted'}`}>{label}</span>
      <span className={`font-display text-lg font-bold ${highlight ? '' : 'text-ink-black'}`}>{value}</span>
    </motion.div>
  )
}

export default function LoanCalculator() {
  const [amount, setAmount] = useState(5_000_000)
  const [rate, setRate] = useState(12)
  const [months, setMonths] = useState(12)

  const { totalInterest, totalRepayment, monthly } = useMemo(() => {
    const interest = (amount * rate) / 100
    const repayment = amount + interest
    return {
      totalInterest: interest,
      totalRepayment: repayment,
      monthly: months > 0 ? repayment / months : 0,
    }
  }, [amount, rate, months])

  return (
    <section id="calculator" className="section-pad relative">
      <div className="container-px">
        <SectionHeading
          eyebrow="Loan Calculator"
          title="Estimate your repayment in seconds"
          description="Adjust the amount, rate, and term to preview your figures. A clear picture before you apply."
        />

        <Reveal className="mt-16">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-black/10 bg-white">
            <div className="grid lg:grid-cols-2">
              {/* Inputs */}
              <div className="p-8 sm:p-10">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20">
                    <Calculator01Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink-black">Loan Details</h3>
                    <p className="text-xs text-muted">Move the sliders to adjust</p>
                  </div>
                </div>

                <div className="mt-9 space-y-8">
                  <SliderField
                    label="Loan Amount"
                    value={amount}
                    min={100_000}
                    max={50_000_000}
                    step={100_000}
                    unit="RWF"
                    onChange={setAmount}
                    format={fmt}
                  />
                  <SliderField
                    label="Interest Rate"
                    value={rate}
                    min={1}
                    max={40}
                    step={0.5}
                    unit="%"
                    onChange={setRate}
                  />
                  <SliderField
                    label="Repayment Period"
                    value={months}
                    min={1}
                    max={60}
                    step={1}
                    unit="months"
                    onChange={setMonths}
                  />
                </div>
              </div>

              {/* Results */}
              <div className="relative border-t border-black/10 bg-ivory p-8 sm:p-10 lg:border-l lg:border-t-0">
                <p className="relative text-xs uppercase tracking-[0.28em] text-gold">Your Estimate</p>

                <div className="relative mt-6 space-y-4">
                  <ResultRow label="Estimated Monthly Repayment" value={`RWF ${fmt(monthly)}`} highlight />
                  <ResultRow label="Total Interest" value={`RWF ${fmt(totalInterest)}`} />
                  <ResultRow label="Total Repayment" value={`RWF ${fmt(totalRepayment)}`} />
                </div>

                <div className="relative mt-7 flex items-start gap-2.5 rounded-xl border border-black/[0.07] bg-white p-4">
                  <InformationCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <p className="text-xs leading-relaxed text-muted">
                    Estimated figures are for guidance only. Final terms are subject to review and
                    approval.
                  </p>
                </div>

                <Link to="/contact" className="btn-gold mt-6 w-full">
                  Apply With These Figures
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
