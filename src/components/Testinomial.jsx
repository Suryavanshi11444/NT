import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Marketing Director, TechCorp',
      content: 'Their digital marketing services transformed our online presence. Our engagement increased by 300% within just three months!',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CEO, StartupHub',
      content: 'The website they built for us exceeded all expectations. Beautiful design, flawless functionality, and incredible SEO results.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'E-commerce Manager',
      content: 'Their social media strategy helped us double our sales. The team is creative, responsive, and truly understands business goals.',
      rating: 4,
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'CTO, InnovateTech',
      content: 'The mobile app development was exceptional. They delivered ahead of schedule with perfect execution.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      id: 5,
      name: 'Emma Rodriguez',
      role: 'Product Manager',
      content: 'Their UI/UX design team created an intuitive interface that our users love. Conversion rates improved by 45%.',
      rating: 5,
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg'
    },
    {
      id: 6,
      name: 'James Kim',
      role: 'Founder, DigitalAgency',
      content: 'The SEO strategy they implemented took us to the first page of Google for all our target keywords.',
      rating: 4,
      avatar: 'https://randomuser.me/api/portraits/men/65.jpg'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);

  // Determine which testimonials to show based on screen size
  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
    }
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Update visible count on resize
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setVisibleCount(getVisibleCount());
    });
  }

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('right');
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - visibleCount ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('left');
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - visibleCount : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = (dir) => ({
    hidden: { 
      x: dir === 'right' ? 100 : -100,
      opacity: 0 
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      x: dir === 'right' ? -100 : 100,
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: "easeIn"
      }
    }
  });

  const floating = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="relative py-20 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-16 h-16 rounded-full bg-blue-100 opacity-40"
        variants={floating}
        animate="animate"
      />
      <motion.div 
        className="absolute bottom-1/4 right-20 w-24 h-24 rounded-full bg-blue-200 opacity-30"
        variants={floating}
        animate="animate"
        style={{ y: [0, -20, 0] }}
      />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

          {/* Testimonials grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
          >
            {testimonials
              .slice(activeIndex, activeIndex + visibleCount)
              .concat(testimonials.slice(0, Math.max(0, activeIndex + visibleCount - testimonials.length)))
              .map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  custom={direction}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={item(direction)}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative"
                >
                  {/* Quote icon */}
                  <div className="absolute top-6 left-6 text-blue-100 text-5xl">
                    <FaQuoteLeft />
                  </div>

                  {/* Rating stars */}
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>

                  {/* Testimonial content */}
                  <p className="text-gray-700 mb-6 relative z-10">
                    {testimonial.content}
                  </p>

                  {/* Client info */}
                  <div className="flex items-center">
                    <div className="relative">
                      <motion.img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
                        whileHover={{ scale: 1.1 }}
                      />
                      <motion.div 
                        className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                      />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>

                  {/* Decorative element */}
                  <motion.div
                    className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 }}
                  />
                </motion.div>
              ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience our services?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(37, 99, 235, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialSection;