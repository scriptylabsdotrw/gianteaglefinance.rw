import {
  PencilEdit01Icon,
  Calculator01Icon,
  Wallet01Icon,
  HeadphonesIcon,
  ArrowRight01Icon,
} from 'hugeicons-react'
import Reveal from './ui/Reveal'
import { MotionLink } from './ui/MotionLink'
import type { IconType } from './ui/icon'

interface QuickItem {
  icon: IconType
  title: string
  description: string
  to: string
}

const items: QuickItem[] = [
  {
    icon: PencilEdit01Icon,
    title: 'Apply for a Loan',
    description: 'Start your application in minutes with a simple inquiry form.',
    to: '/contact',
  },
  {
    icon: Calculator01Icon,
    title: 'Loan Calculator',
    description: 'Estimate your monthly repayment before you apply.',
    to: '/calculator',
  },
  {
    icon: Wallet01Icon,
    title: 'Salary Advance',
    description: 'Quick access to a portion of your salary before payday.',
    to: '/services',
  },
  {
    icon: HeadphonesIcon,
    title: 'Talk to an Advisor',
    description: 'Get professional guidance on the right financing for you.',
    to: '/contact',
  },
]

export default function QuickAccess() {
  return (
    <section className="relative mt-14 sm:mt-16 lg:mt-20">
      <div className="container-px">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <MotionLink
                to={item.to}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="group flex h-full flex-col rounded-2xl border border-black/[0.08] bg-white p-6 transition-colors hover:border-gold"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/10 text-gold ring-1 ring-gold/20 transition-all duration-300 group-hover:bg-gold group-hover:text-white">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink-black">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                  Access more
                  <ArrowRight01Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </MotionLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
