import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * On navigation: scrolls to the top of the page, or — when the URL has a hash
 * (e.g. /#calculator) — smoothly scrolls to that section once it has rendered.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a tick so the target section is mounted before scrolling.
      const id = hash.replace('#', '')
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])

  return null
}
