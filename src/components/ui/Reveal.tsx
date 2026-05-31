import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'section' | 'span' | 'li'
}

const buildVariants = (delay: number, y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
})

/**
 * Reveals its children with a soft fade-up the first time they scroll into view.
 * Used across sections to keep scroll animations consistent and tasteful.
 */
export default function Reveal({ children, className, delay = 0, y = 28, as = 'div' }: RevealProps) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={buildVariants(delay, y)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </MotionTag>
  )
}
