import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="relative w-full h-screen bg-white overflow-hidden"
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Glowing rectangle follows cursor */}
      <motion.div
        className="absolute w-64 h-64 bg-blue-100 rounded-3xl opacity-30 pointer-events-none blur-3xl"
        style={{
          left: coords.x - 128,
          top: coords.y - 128,
        }}
        animate={{ x: coords.x - 128, y: coords.y - 128 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          variants={itemVariants}
        >
          Crafting Digital Brilliance Since 2015
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl"
          variants={itemVariants}
        >
          We transform ideas into sleek, functional, and engaging digital experiences—designed for users, built for results.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.button
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Meet Our Team
          </motion.button>

          <motion.button
            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Process
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutHero;
