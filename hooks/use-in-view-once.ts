'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Defers expensive work (e.g. mounting a WebGL canvas) until the element
 * scrolls near the viewport, then stays mounted. Falls back to `true`
 * immediately if IntersectionObserver isn't available.
 */
export function useInViewOnce<T extends HTMLElement>(rootMargin = '300px') {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (inView) return
    const node = ref.current
    if (!node) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [inView, rootMargin])

  return { ref, inView }
}
