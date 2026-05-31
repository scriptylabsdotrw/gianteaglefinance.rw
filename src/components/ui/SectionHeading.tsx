import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

/**
 * Consistent eyebrow + display heading + supporting copy used at the top of sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  return (
    <div className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink-black sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
