import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary-400 mb-4">Horne Lake Landscaping</h3>
            <p className="text-gray-400">
              Transforming outdoor spaces with professional landscaping services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: <a href="tel:+16043065920" className="text-primary-400 hover:text-primary-300 transition-colors">+1 (604) 306-5920</a></li>
              <li>Email: info@hornelakelandscaping.com</li>
              <li>Website: <a href="https://hornelakelandscaping.com" className="text-primary-400 hover:text-primary-300 transition-colors" target="_blank" rel="noopener noreferrer">hornelakelandscaping.com</a></li>
              <li>Address: 489 Horne Lake Rd, Qualicum Beach, BC V9K 1Z7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Horne Lake Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
