import ServiceCard from './ServiceCard'
import { FaLeaf, FaSeedling, FaTint, FaTools } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      title: 'Lawn Care',
      description: 'Regular mowing, fertilizing, and maintenance to keep your lawn healthy and vibrant year-round.',
      icon: FaLeaf,
    },
    {
      title: 'Garden Design',
      description: 'Custom garden designs tailored to your space, style, and preferences for a stunning outdoor oasis.',
      icon: FaSeedling,
    },
    {
      title: 'Irrigation Systems',
      description: 'Professional installation and maintenance of efficient irrigation systems to keep your landscape thriving.',
      icon: FaTint,
    },
    {
      title: 'Maintenance',
      description: 'Comprehensive maintenance services including pruning, weeding, and seasonal cleanup.',
      icon: FaTools,
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive landscaping solutions to enhance and maintain your outdoor space
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
