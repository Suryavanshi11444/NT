import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Faq12 = () => {
  const faqs = [
    {
      question: "What is Artisan Connect 3?",
      answer: "Artisan Connect 3 is a platform that connects local artisans with tourists, promoting cultural tourism and handmade products."
    },
    {
      question: "How does the platform help artisans?",
      answer: "It provides artisans with a digital marketplace and opportunity to earn by acting as local guides or selling handmade products."
    },
    {
      question: "Can tourists book local guides through the platform?",
      answer: "Yes, tourists can connect with registered artisans who offer personalized cultural tours and experiences."
    },
    {
      question: "Are the handmade products authentic?",
      answer: "Yes, all listed products are handcrafted by verified local artisans, ensuring authenticity and cultural value."
    },
    {
      question: "How does the reward-based system work?",
      answer: "Users earn rewards by discovering hidden gems and engaging with cultural experiences, which can be redeemed on the platform."
    },
    {
      question: "Is there an app available for Artisan Connect 3?",
      answer: "We are currently developing a mobile app to enhance accessibility and user experience on the go."
    },
    {
      question: "How can an artisan register on the platform?",
      answer: "Artisans can sign up through our website by providing basic information, skills, and uploading sample works for verification."
    },
    {
      question: "Is the platform available across India?",
      answer: "We are initially launching in selected states and plan to expand across India with broader artisan involvement."
    },
    {
      question: "What kind of cultural experiences are available?",
      answer: "Users can explore village tours, traditional crafting sessions, local festivals, and more through artisan-led experiences."
    },
    {
      question: "Can I buy souvenirs directly from the artisans?",
      answer: "Absolutely! You can browse, purchase, and even request custom handmade souvenirs from artisans on the platform."
    },
    {
      question: "How does the platform ensure quality and trust?",
      answer: "We verify all artisans before listing, collect user feedback, and continuously monitor quality for a trustworthy experience."
    },
    {
      question: "Will there be AR/VR experiences in the future?",
      answer: "Yes! We're working on integrating AR/VR to offer immersive previews of cultural sites and artisan workshops."
    },
    {
      question: "Can users review and rate artisans?",
      answer: "Yes, users can provide ratings and reviews after each experience or purchase, helping others choose wisely."
    },
    {
      question: "What payment methods are supported?",
      answer: "We support secure payments via UPI, credit/debit cards, and mobile wallets for hassle-free transactions."
    },
    {
      question: "Can foreign tourists use the platform?",
      answer: "Yes, our platform supports multiple languages and currencies, making it tourist-friendly for international users."
    },
    {
      question: "What are 'Hidden Gems' on the platform?",
      answer: "Hidden Gems are unique, lesser-known cultural spots suggested by artisans that users can explore and earn rewards for discovering."
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const questionsPerPage = 6;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const next = () => {
    if (currentPage < Math.floor(faqs.length / questionsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previous = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedFaqs = faqs.slice(currentPage * questionsPerPage, (currentPage + 1) * questionsPerPage);

  return (
    <div className="bg-white text-gray-800 py-20 flex justify-center">
      <div className="w-[90%] max-w-6xl">
        {/* Header Section */}
        <div className="relative text-center mb-12">
          {/* Background Text */}
          <div className="absolute inset-0 flex justify-center items-center">
            <h1 className="text-[30px] lg:text-[70px] font-bold text-blue-100 opacity-60 z-5 mb-4 whitespace-nowrap select-none">
              Frequently Asked Questions
            </h1>
          </div>

          {/* Foreground Text */}
          <div className="relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-800 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-blue-600">
              Find answers to common questions about our services
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* FAQ List */}
          <div className="lg:w-[55%] w-full">
            {displayedFaqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-5 mb-4 border border-blue-100"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-blue-900">{faq.question}</h3>
                  {activeIndex === index ? (
                    <FaChevronUp className="text-blue-600" />
                  ) : (
                    <FaChevronDown className="text-blue-600" />
                  )}
                </div>
                {activeIndex === index && (
                  <motion.p 
                    className="mt-3 text-blue-700"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
            
            {/* Pagination Controls */}
            <div className="flex justify-center mt-6 gap-2">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors"
                onClick={previous}
                disabled={currentPage === 0}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                &lt;
              </motion.button>
              <span className="flex items-center text-blue-800">
                Page {currentPage + 1} of {Math.ceil(faqs.length / questionsPerPage)}
              </span>
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-colors"
                onClick={next}
                disabled={(currentPage + 1) * questionsPerPage >= faqs.length}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                &gt;
              </motion.button>
            </div>
          </div>

          {/* Contact Form Side */}
          <motion.div 
            className="lg:w-[40%] w-full bg-blue-50 p-8 rounded-xl border border-blue-200"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-center mb-6">
              <img
                className="mx-auto w-40 mb-4"
                src="https://r0jnyr57ua.ufs.sh/f/vsnjl5A7Osa5b49e6atVeg9asBXzKcdUu5Po6FhjmvntTyM2"
                alt="question illustration"
              />
              <h3 className="text-2xl font-bold text-blue-800 mb-2">Any Questions?</h3>
              <p className="text-blue-600">
                Can't find what you're looking for? Send us a message.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-blue-800 font-medium mb-1 text-left">
                  Your Question
                </label>
                <input
                  type="text"
                  placeholder="Enter your question here"
                  className="w-full p-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              
              <motion.button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Faq12;