import { FaLeaf, FaSeedling, FaTint, FaTools, FaCheck } from 'react-icons/fa'

const ServicesPage = () => {
  const services = [
    {
      title: 'Lawn Care',
      description: 'Regular mowing, fertilizing, and maintenance to keep your lawn healthy and vibrant year-round. We offer weekly, bi-weekly, and monthly service plans tailored to your needs.',
      icon: FaLeaf,
      features: ['Regular mowing', 'Fertilization', 'Weed control', 'Aeration', 'Overseeding'],
    },
    {
      title: 'Garden Design',
      description: 'Custom garden designs tailored to your space, style, and preferences for a stunning outdoor oasis. From concept to completion, we bring your vision to life.',
      icon: FaSeedling,
      features: ['Custom design consultation', 'Plant selection', 'Hardscaping', 'Lighting design', '3D visualization'],
    },
    {
      title: 'Irrigation Systems',
      description: 'Professional installation and maintenance of efficient irrigation systems to keep your landscape thriving. Save water and time with smart irrigation solutions.',
      icon: FaTint,
      features: ['System installation', 'Smart controllers', 'Drip irrigation', 'Sprinkler systems', 'Maintenance & repairs'],
    },
    {
      title: 'Maintenance',
      description: 'Comprehensive maintenance services including pruning, weeding, and seasonal cleanup. Keep your landscape looking its best all year long.',
      icon: FaTools,
      features: ['Pruning & trimming', 'Weed management', 'Seasonal cleanup', 'Mulching', 'Pest control'],
    },
  ]

  return (
    <div className="pt-8">
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Comprehensive landscaping solutions to enhance and maintain your outdoor space
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                  <div className="text-primary-600 text-5xl mb-4">
                    <IconComponent />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Services Include:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <FaCheck className="text-primary-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
