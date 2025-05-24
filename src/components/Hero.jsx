import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-90"></div>
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto py-24">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-block bg-blue-100 px-4 py-2 rounded-full mb-6"
              >
                <span className="text-blue-800 text-sm font-medium tracking-wider">
                  PREMIUM DIGITAL SERVICES
                </span>
              </motion.div>

              <h1 className="text-4xl xs:text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Elevate Your Business With <br />
                <span className="text-blue-600">Professional Digital Solutions</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                We deliver comprehensive digital services including web development, 
                digital marketing, and social media management to help your business 
                thrive in the digital landscape.
              </p>

              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ y: -2, boxShadow: "0 6px 12px rgba(37, 99, 235, 0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all"
                >
                  Our Services
                </motion.button>
                <motion.button
                  whileHover={{ y: -2, backgroundColor: "#f8fafc" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-600 font-medium py-3 px-8 rounded-lg shadow-sm transition-all"
                >
                  Get a Quote
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Services Showcase */}
          <div className="lg:w-1/3 grid grid-cols-2 gap-4">
            {[
              { 
                image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
                title: "Web Development",
                icon: "💻"
              },
              { 
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
                title: "Digital Marketing",
                icon: "📈"
              },
              { 
                image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
                title: "Social Media",
                icon: "📱"
              },
              { 
                image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", 
                title: "SEO Optimization",
                icon: "🔍"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                whileHover={{ y: -5 }}
                className="relative group overflow-hidden rounded-xl shadow-md bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent flex flex-col items-center justify-end p-4">
                  <span className="text-3xl mb-2">{item.icon}</span>
                  <h3 className="text-white font-medium text-center">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Moving Decorative Elements - Simplified */}
        <div className="absolute right-12 bottom-12 hidden lg:block">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 border-2 border-blue-100 rounded-full opacity-50"></div>
            <div className="absolute inset-8 border-2 border-blue-200 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;