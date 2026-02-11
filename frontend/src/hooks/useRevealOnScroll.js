import { useState, useEffect, useRef } from 'react'

const DEFAULT_OPTIONS = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
  triggerOnce: true,
}

/**
 * Hook that reveals content when it enters the viewport using Intersection Observer.
 * Triggers once for performance and premium UX.
 *
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - Ratio of element visibility to trigger (0-1)
 * @param {string} options.rootMargin - Margin around root (e.g. '-50px' to trigger slightly before)
 * @param {boolean} options.triggerOnce - If true, only animate once (unobserves after visible)
 * @returns {[React.RefObject, boolean]} - [ref to attach to element, isVisible state]
 */
export function useRevealOnScroll(options = {}) {
  const opts = { ...DEFAULT_OPTIONS, ...options }
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)
  const hasRevealed = useRef(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (opts.triggerOnce && hasRevealed.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        if (opts.triggerOnce && hasRevealed.current) return

        hasRevealed.current = true
        setIsVisible(true)

        if (opts.triggerOnce) {
          observer.unobserve(element)
        }
      },
      {
        threshold: opts.threshold,
        rootMargin: opts.rootMargin,
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [opts.threshold, opts.rootMargin, opts.triggerOnce])

  return [ref, isVisible]
}
