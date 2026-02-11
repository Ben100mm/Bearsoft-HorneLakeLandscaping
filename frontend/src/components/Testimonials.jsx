import { FaStar } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Homeowner',
      content: 'Horne Lake Landscaping transformed our backyard into a beautiful oasis. The team was professional, timely, and the results exceeded our expectations!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      content: 'Outstanding service and attention to detail. Our commercial property looks amazing, and the maintenance program keeps everything perfect year-round.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Property Manager',
      content: 'Reliable, professional, and affordable. Horne Lake Landscaping has been maintaining our properties for years, and we couldn\'t be happier.',
      rating: 5,
    },
  ]

  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
