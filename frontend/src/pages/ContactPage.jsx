import ContactForm from '../components/ContactForm'

const ContactPage = () => {
  return (
    <div className="pt-8">
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center section-padding">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/Contact.PNG')"
          }}
        >
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Ready to transform your outdoor space? Contact us for a free consultation
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-700">
                    <a href="tel:+16043065920" className="text-primary-600 hover:text-primary-700 transition-colors">+1 (604) 306-5920</a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-700">info@hornelakelandscaping.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Website</h3>
                  <p className="text-gray-700">
                    <a href="https://hornelakelandscaping.com" className="text-primary-600 hover:text-primary-700 transition-colors" target="_blank" rel="noopener noreferrer">hornelakelandscaping.com</a>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700">
                    489 Horne Lake Rd<br />
                    Qualicum Beach, BC V9K 1Z7
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 7:00 AM - 6:00 PM<br />
                    Saturday: 8:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
