import { Call02Icon, Mail01Icon, MapPinIcon } from 'hugeicons-react'
import { Link } from 'react-router-dom'
import Logo from './ui/Logo'

const quickLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Loan Calculator', to: '/calculator' },
  { label: 'Process', to: '/process' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

const loanServices = [
  'Personal Loans',
  'Salary Advance',
  'Business Loans',
  'SME Financing',
  'Emergency Loans',
  'Loan Advisory',
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-black">
      <div className="gold-divider" />
      <div className="container-px py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo onDark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              GIANT EAGLE FINANCE provides reliable, responsible lending solutions for individuals,
              employees, entrepreneurs, and growing businesses across Rwanda.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-white/55 transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Loan Services</h4>
            <ul className="mt-5 space-y-3">
              {loanServices.map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-sm text-white/55 transition-colors hover:text-gold">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gold">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-white/55">
              <li className="flex items-center gap-3">
                <Call02Icon className="h-4 w-4 shrink-0 text-gold" /> +250 788 329 056
              </li>
              <li className="flex items-center gap-3">
                <Mail01Icon className="h-4 w-4 shrink-0 text-gold" /> info@gianteaglefinance.com
              </li>
              <li className="flex items-center gap-3">
                <MapPinIcon className="h-4 w-4 shrink-0 text-gold" /> Kigali, Rwanda
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/45">
            © 2026 GIANT EAGLE FINANCE. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Responsible lending · Clear terms · Confidential service
          </p>
        </div>
      </div>
    </footer>
  )
}
