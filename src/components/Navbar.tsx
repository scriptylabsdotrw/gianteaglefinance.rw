import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { NavLink, Link } from 'react-router-dom'
import { Menu01Icon, Cancel01Icon, ArrowRight01Icon } from 'hugeicons-react'
import Logo from './ui/Logo'
import { MotionLink } from './ui/MotionLink'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Insights', to: '/insights' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-black/[0.07] bg-white/90 backdrop-blur-xl'
          : 'border-b border-transparent bg-white/60 backdrop-blur-sm'
      }`}
    >
      <nav className="container-px flex h-[72px] items-center justify-between sm:h-20">
        <Link to="/" aria-label="Giant Eagle Finance home">
          <Logo />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `group relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? 'text-gold' : 'text-ink-charcoal/70 hover:text-ink-black'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute inset-x-4 -bottom-0.5 h-px origin-left bg-gold transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <MotionLink to="/contact" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="btn-gold">
            Apply Now
            <ArrowRight01Icon className="h-4 w-4" />
          </MotionLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-white text-ink-charcoal lg:hidden"
        >
          {open ? <Cancel01Icon className="h-5 w-5" /> : <Menu01Icon className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-black/[0.07] bg-white backdrop-blur-xl lg:hidden"
          >
            <ul className="container-px flex flex-col gap-1 py-5">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-gold/10 text-gold'
                          : 'text-ink-charcoal/80 hover:bg-ivory hover:text-ink-black'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.li>
              ))}
              <li className="mt-2">
                <Link to="/contact" onClick={() => setOpen(false)} className="btn-gold w-full">
                  Apply Now
                  <ArrowRight01Icon className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
