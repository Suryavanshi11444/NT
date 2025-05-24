import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.section 
      className="relative bg-blue-600 text-white py-20 overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Crafting Digital Excellence Since 2015
          </motion.h1>
          
          <motion.p 
            className="text-xl text-blue-100 mb-8"
            variants={itemVariants}
          >
            We're a team of passionate designers and developers dedicated to creating exceptional digital experiences.
          </motion.p>
          
          <motion.div 
            className="flex space-x-4"
            variants={itemVariants}
          >
            <motion.button 
              className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Meet Our Team
            </motion.button>
            
            <motion.button 
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Process
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      />
    </motion.section>
  );
};

export default AboutHero;