import React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const [activeAchievement, setActiveAchievement] = useState(0);
  
  const achievements = [
    {
      title: "500+ Projects",
      description: "Successfully delivered digital solutions to clients worldwide"
    },
    {
      title: "10+ Years Experience",
      description: "Combined team experience in digital transformation"
    },
    {
      title: "95% Client Retention",
      description: "Our clients stay with us for ongoing digital success"
    },
    {
      title: "Award Winning",
      description: "Recognized for innovation in digital marketing solutions"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAchievement((prev) => (prev + 1) % achievements.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading with description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Transforming Digital Landscapes</h2>
          <p className="text-lg text-blue-600 max-w-3xl mx-auto">
            We empower businesses with cutting-edge digital solutions that drive growth, engagement, and measurable results.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side - About text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-1/2 space-y-8"
          >
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">Who We Are</h3>
              <p className="text-gray-700">
                We are a team of digital innovators committed to helping businesses thrive in the online world. 
                With expertise spanning digital marketing, social media, web development, and app creation, 
                we provide comprehensive solutions tailored to your unique needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-400"
              >
                <h4 className="font-bold text-blue-700 mb-2">Our Mission</h4>
                <p className="text-gray-600 text-sm">
                  To deliver exceptional digital experiences that drive business growth and customer engagement.
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-300"
              >
                <h4 className="font-bold text-blue-700 mb-2">Our Approach</h4>
                <p className="text-gray-600 text-sm">
                  Data-driven strategies combined with creative excellence to produce measurable results.
                </p>
              </motion.div>
            </div>

            <div className="bg-blue-100 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">Why Choose Us</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Full-service digital solutions under one roof</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Transparent processes and regular reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Custom strategies tailored to your business goals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Agile methodologies for fast, effective implementation</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right side - Achievements display */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 h-full flex flex-col justify-center relative overflow-hidden">
              {/* Animated background elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: `${Math.random() * 200 + 50}px`,
                      height: `${Math.random() * 200 + 50}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">Our Achievements</h3>
                
                <div className="min-h-[200px] relative">
                  {achievements.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: activeAchievement === index ? 1 : 0,
                        y: activeAchievement === index ? 0 : 20
                      }}
                      transition={{ duration: 0.5 }}
                      className={`absolute top-0 left-0 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 w-full ${activeAchievement === index ? 'block' : 'hidden'}`}
                    >
                      <h4 className="text-3xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-blue-100">{item.description}</p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                  {achievements.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveAchievement(index)}
                      className={`w-3 h-3 rounded-full transition-all ${activeAchievement === index ? 'bg-white w-6' : 'bg-white/30'}`}
                      aria-label={`Show achievement ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="mt-10 grid grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 p-4 rounded-lg border border-white/20"
                  >
                    <div className="text-white font-semibold">Social Media</div>
                    <div className="text-blue-200 text-sm">100+ campaigns managed</div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.03 }}
                    className="bg-white/10 p-4 rounded-lg border border-white/20"
                  >
                    <div className="text-white font-semibold">Websites</div>
                    <div className="text-blue-200 text-sm">300+ developed</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;