import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Counts from 0 up to `target` once the element scrolls into view.
 * Returns the ref to attach and the current animated value.
 */
export function useCountUp(target: number, duration = 1600) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf = 0
    let start: number | null = null

    const tick = (ts: number) => {
      if (start === null) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration])

  return { ref, value }
}
