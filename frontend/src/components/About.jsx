import RevealOnScroll from './RevealOnScroll'

const About = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About Horne Lake Landscaping
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              With over 15 years of experience in the landscaping industry, Horne Lake Landscaping has been
              transforming outdoor spaces into beautiful, functional environments that enhance both
              property value and quality of life.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our team of certified professionals combines creativity with expertise to deliver
              customized solutions that meet your unique needs and exceed your expectations.
            </p>
            <p className="text-lg text-gray-600">
              From initial design consultation to ongoing maintenance, we're committed to providing
              exceptional service and outstanding results.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
          <div className="bg-primary-100 rounded-lg p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-gray-700">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-700">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
                <div className="text-gray-700">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-700">Support Available</div>
              </div>
            </div>
          </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}

export default About
