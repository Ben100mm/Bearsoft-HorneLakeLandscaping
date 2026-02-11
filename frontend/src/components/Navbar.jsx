import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

const SCROLL_THRESHOLD = 100
const ANIMATION_DURATION = 300

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const isVisibleRef = useRef(true)
  const isScrolledRef = useRef(false)
  const ticking = useRef(false)
  const location = useLocation()

  isVisibleRef.current = isVisible
  isScrolledRef.current = isScrolled

  useEffect(() => {
    const updateVisibility = (currentScrollY) => {
      const scrollDelta = currentScrollY - lastScrollY.current
      lastScrollY.current = currentScrollY

      const crossedThreshold = currentScrollY > SCROLL_THRESHOLD
      const scrollingDown = scrollDelta > 0

      let nextVisible = isVisibleRef.current
      if (scrollingDown && crossedThreshold) {
        nextVisible = false
      } else if (!scrollingDown) {
        nextVisible = true
      }

      if (nextVisible !== isVisibleRef.current) {
        isVisibleRef.current = nextVisible
        setIsVisible(nextVisible)
      }

      const nextScrolled = currentScrollY > 50
      if (nextScrolled !== isScrolledRef.current) {
        isScrolledRef.current = nextScrolled
        setIsScrolled(nextScrolled)
      }
    }

    const handleScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          updateVisibility(window.scrollY)
          ticking.current = false
        })
        ticking.current = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center pt-6 px-4 pointer-events-none">
      <nav
        className={`
          pointer-events-auto
          flex items-center justify-between gap-6 md:gap-10
          rounded-full
          px-5 py-3 md:px-8 md:py-3.5
          border border-gray-100/80
          transition-[transform,background-color,box-shadow] duration-300 ease-in-out
          ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm shadow-md'}
        `}
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-150%)',
          transitionDuration: `${ANIMATION_DURATION}ms`,
        }}
      >
        <Link
          to="/"
          className="text-lg md:text-xl font-bold text-primary-600 shrink-0"
        >
          Horne Lake Landscaping
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors duration-200 ${
                isActive(link.path)
                  ? 'text-primary-600'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden md:inline-flex btn-primary shrink-0 !py-2 !px-5 !text-sm"
        >
          Get Quote
        </Link>

        <button
          className="md:hidden text-gray-700 focus:outline-none p-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[5.5rem] z-40 bg-black/20 backdrop-blur-sm pointer-events-auto"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
      {isOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 py-4 px-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 pointer-events-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary mt-2 text-center"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
