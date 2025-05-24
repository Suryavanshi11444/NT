import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const services = [
    { name: 'Web Development', href: '/services/web-dev' },
    { name: 'Mobile Apps', href: '/services/mobile-apps' },
    { name: 'UI/UX Design', href: '/services/design' },
    { name: 'Digital Marketing', href: '/services/marketing' },
    { name: 'SEO Optimization', href: '/services/seo' },
  ];

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '/blog' },
    { name: 'Press', href: '/press' },
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              ServicePro
            </h3>
            <p className="text-sm leading-relaxed">
              Delivering exceptional digital services since 2015. We help businesses grow through innovative solutions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="text-sm hover:text-blue-400 transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="text-sm hover:text-blue-400 transition-colors flex items-center"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-sm">123 Business Ave, Suite 500<br />San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-blue-400 mr-3" />
                <a href="tel:+11234567890" className="text-sm hover:text-blue-400 transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <a href="mailto:info@servicepro.com" className="text-sm hover:text-blue-400 transition-colors">
                  info@servicepro.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h4 className="text-lg font-semibold text-white mb-2">Subscribe to our newsletter</h4>
              <p className="text-sm">Get the latest updates and special offers delivered to your inbox.</p>
            </div>
            <div className="md:w-1/2">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-r-lg hover:opacity-90 transition-opacity"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-xs text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} ServicePro. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {legal.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-xs text-gray-500 hover:text-blue-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;