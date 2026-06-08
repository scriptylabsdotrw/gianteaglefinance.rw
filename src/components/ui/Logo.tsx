interface LogoProps {
  className?: string
  compact?: boolean
  onDark?: boolean
}

export default function Logo({ className = '', compact = false, onDark = false }: LogoProps) {
  return (
    <span className={`flex items-center ${className}`}>
      <img
        src="/gef-logo.png"
        alt="Giant Eagle Finance"
        className={compact ? 'h-10 w-auto' : 'h-14 w-auto sm:h-16'}
        style={onDark ? { filter: 'drop-shadow(0 0 6px rgba(143,143,26,0.35))' } : undefined}
      />
    </span>
  )
}
