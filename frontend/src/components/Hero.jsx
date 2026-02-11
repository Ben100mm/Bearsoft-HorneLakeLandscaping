import { Link } from 'react-router-dom'
import heroBg from '../assets/title.avif'

const Hero = () => {
  return (
    <section
      className="relative min-h-[75vh] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 container-custom section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your Outdoor Space
          </h3>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Professional landscaping services that bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary">
              Get Free Quote
            </Link>
            <Link to="/services" className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 border-2 border-white">
              Our Services
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white"></div>
    </section>
  )
}

export default Hero
