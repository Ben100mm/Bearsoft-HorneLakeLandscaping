const AboutPage = () => {
  return (
    <div className="pt-8">
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center section-padding">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/Hornelake1.jpeg')"
          }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Horne Lake Landscaping</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Your trusted partner in creating beautiful outdoor spaces
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 2008, Horne Lake Landscaping has grown from a small local business to a trusted
                name in professional landscaping services. What started as a passion for creating
                beautiful outdoor spaces has evolved into a comprehensive landscaping company
                serving residential and commercial clients throughout the region.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our mission is to transform outdoor spaces into beautiful, functional environments
                that enhance property value and improve quality of life. We achieve this through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6">
                <li>Delivering exceptional quality in every project</li>
                <li>Providing personalized service tailored to each client's needs</li>
                <li>Using sustainable practices that protect the environment</li>
                <li>Maintaining the highest standards of professionalism and integrity</li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Experience & Expertise</h3>
                  <p className="text-gray-700">
                    Over 15 years of combined experience with certified professionals who stay
                    current with industry best practices.
                  </p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Guarantee</h3>
                  <p className="text-gray-700">
                    We stand behind our work with a satisfaction guarantee. Your happiness is our
                    top priority.
                  </p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Practices</h3>
                  <p className="text-gray-700">
                    We use eco-friendly methods and materials to create beautiful landscapes that
                    are also environmentally responsible.
                  </p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Full-Service Solutions</h3>
                  <p className="text-gray-700">
                    From design to installation to maintenance, we handle every aspect of your
                    landscaping needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
