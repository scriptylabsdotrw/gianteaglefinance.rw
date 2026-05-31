interface LogoProps {
  className?: string
  compact?: boolean
  /** Render the wordmark in light colors for use on dark backgrounds. */
  onDark?: boolean
}

/**
 * Brand mark: a stylised gold eagle/crest icon paired with the wordmark.
 * Drawn inline as SVG so there is no external image dependency.
 */
export default function Logo({ className = '', compact = false, onDark = false }: LogoProps) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span
        className={`relative grid h-10 w-10 place-items-center rounded-xl border border-gold/40 sm:h-11 sm:w-11 ${
          onDark ? 'bg-ink-soft' : 'bg-white'
        }`}
      >
        <svg viewBox="0 0 48 48" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true">
          <defs>
            <linearGradient id="logoGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#8f8f1a" />
              <stop offset="1" stopColor="#757500" />
            </linearGradient>
          </defs>
          <path
            d="M24 6 L38 17 L30 18.5 L38 24 L28.5 25 L34 33 L24 27.5 L14 33 L19.5 25 L10 24 L18 18.5 L10 17 Z"
            fill="url(#logoGold)"
          />
          <circle cx="24" cy="38" r="3.2" fill="url(#logoGold)" />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-display text-base font-bold tracking-wide sm:text-lg ${
              onDark ? 'text-white' : 'text-ink-black'
            }`}
          >
            GIANT EAGLE
          </span>
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.42em] text-gold">
            Finance
          </span>
        </span>
      )}
    </span>
  )
}
