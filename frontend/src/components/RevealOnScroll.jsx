import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const RevealOnScroll = ({
  children,
  className = '',
  delay = 0,
  as: Component = 'div',
  ...props
}) => {
  const [ref, isVisible] = useRevealOnScroll()

  return (
    <Component
      ref={ref}
      className={`transition-all duration-[600ms] ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${delay}ms`,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

export default RevealOnScroll
