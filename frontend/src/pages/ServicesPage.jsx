import { FaLeaf, FaSeedling, FaTint, FaTools, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ServicesPage = () => {
  const services = [
    {
      title: 'Lawn Care',
      description: 'Regular mowing, fertilizing, and maintenance to keep your lawn healthy and vibrant year-round. We offer weekly, bi-weekly, and monthly service plans tailored to your needs.',
      icon: FaLeaf,
      features: ['Regular mowing', 'Fertilization', 'Weed control', 'Aeration', 'Overseeding'],
      image: '/assets/images/Lawn Maintenance.PNG',
    },
    {
      title: 'Garden Design',
      description: 'Custom garden designs tailored to your space, style, and preferences for a stunning outdoor oasis. From concept to completion, we bring your vision to life.',
      icon: FaSeedling,
      features: ['Custom design consultation', 'Plant selection', 'Hardscaping', 'Lighting design', '3D visualization'],
      image: '/assets/images/GardenDesign.PNG',
    },
    {
      title: 'Irrigation Systems',
      description: 'Professional installation and maintenance of efficient irrigation systems to keep your landscape thriving. Save water and time with smart irrigation solutions.',
      icon: FaTint,
      features: ['System installation', 'Smart controllers', 'Drip irrigation', 'Sprinkler systems', 'Maintenance & repairs'],
      image: '/assets/images/Irrigation.PNG',
    },
    {
      title: 'Maintenance',
      description: 'Comprehensive maintenance services including pruning, weeding, and seasonal cleanup. Keep your landscape looking its best all year long.',
      icon: FaTools,
      features: ['Pruning & trimming', 'Weed management', 'Seasonal cleanup', 'Mulching', 'Pest control'],
      image: '/assets/images/Pruning 1.PNG',
    },
  ]


  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center section-padding">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/Services1.PNG')"
          }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">Our Services</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Comprehensive landscaping solutions to enhance and maintain your outdoor space
          </p>
          <Link to="/contact" className="inline-block btn-secondary">
            Get Your Free Quote
          </Link>
        </div>
      </section>

      {/* Detailed Services Section - Integrated with Images */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {services.map((service, index) => {
              const IconComponent = service.icon
              
              return (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  {/* Image and Icon Header */}
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    {service.secondaryImage ? (
                      <div className="grid grid-cols-2 h-full gap-1">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <img 
                          src={service.secondaryImage} 
                          alt={`${service.title} example`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    ) : (
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg">
                      <IconComponent className="text-primary-600 text-3xl md:text-4xl" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{service.title}</h3>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8">
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {service.description}
                    </p>
                      
                    <div className="bg-primary-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4 text-lg">Services Include:</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <div className="bg-primary-600 rounded-full p-1.5 mr-3 flex-shrink-0">
                              <FaCheck className="text-white text-xs" />
                            </div>
                            <span className="text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center section-padding">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/Services2.jpeg')"
          }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Ready to Transform Your Outdoor Space?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
            Get started with a free consultation and quote today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-secondary text-lg px-8 py-4">
              Get Free Quote
            </Link>
            <Link to="/gallery" className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-colors duration-200 border-2 border-white text-lg">
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
