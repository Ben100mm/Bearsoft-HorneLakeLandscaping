import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative min-h-[800px] md:min-h-[900px] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-contain bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/Landing 1.PNG')",
          backgroundPosition: "50% 20%"
        }}
      >
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 section-padding pl-20 sm:pl-28 lg:pl-36 pr-4 sm:pr-6 lg:pr-8 -mt-20 md:-mt-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Transform Your Outdoor Space
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Professional landscaping services that bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-secondary">
              Get Free Quote
            </Link>
            <Link to="/services" className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 border-2 border-white">
              Our Services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom white transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white"></div>
    </section>
  )
}

export default Hero
