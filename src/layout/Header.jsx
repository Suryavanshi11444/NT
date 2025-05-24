import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link 
              to="/" 
              className="flex items-center space-x-2"
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                DevDesign
              </span>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div 
                key={item.name}
                className="relative px-1 py-2"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  to={item.path}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                    index === navItems.length - 1 
                      ? 'bg-white text-blue-600 hover:bg-blue-50 font-semibold shadow-sm'
                      : 'text-blue-100 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
                
                {hoveredItem === index && index !== navItems.length - 1 && (
                  <motion.div
                    layoutId="navHighlight"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-blue-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden pb-4 space-y-1"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link
                  to={item.path}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    item.path === '/contact'
                      ? 'bg-white text-blue-600 font-semibold mx-2 shadow-sm'
                      : 'text-blue-100 hover:bg-blue-500 hover:text-white mx-2'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;