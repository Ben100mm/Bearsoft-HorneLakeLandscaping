import { FaImage } from 'react-icons/fa'

const GalleryPage = () => {
  // Placeholder gallery items - replace with actual images
  const galleryItems = [
    { id: 1, title: 'Lawn Care Project', category: 'Lawn Care' },
    { id: 2, title: 'Garden Design', category: 'Garden Design' },
    { id: 3, title: 'Irrigation Installation', category: 'Irrigation' },
    { id: 4, title: 'Landscape Maintenance', category: 'Maintenance' },
    { id: 5, title: 'Custom Hardscaping', category: 'Garden Design' },
    { id: 6, title: 'Seasonal Cleanup', category: 'Maintenance' },
    { id: 7, title: 'Commercial Landscaping', category: 'Lawn Care' },
    { id: 8, title: 'Residential Garden', category: 'Garden Design' },
    { id: 9, title: 'Sprinkler System', category: 'Irrigation' },
    { id: 10, title: 'Tree Pruning', category: 'Maintenance' },
    { id: 11, title: 'Patio Design', category: 'Garden Design' },
    { id: 12, title: 'Lawn Restoration', category: 'Lawn Care' },
  ]

  const categories = ['All', 'Lawn Care', 'Garden Design', 'Irrigation', 'Maintenance']

  return (
    <div className="pt-8">
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center section-padding">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/Gallery.PNG')"
          }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Gallery</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Explore our portfolio of completed landscaping projects and transformations
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-200 aspect-square"
              >
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200">
                  <FaImage className="text-6xl text-primary-400 group-hover:text-primary-600 transition-colors duration-300" />
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-primary-100">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 text-lg mb-6">
              Ready to transform your outdoor space?
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
