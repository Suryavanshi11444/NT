import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/Hero';
import About from '../components/AboutSec';
import Services from '../components/Services';
import Faq from '../components/Faq';
import Testimonials from '../components/Testinomial';

const Home = () => {
 
  return (
   <>
<HeroSection/>
<About/>
<Services/>
<Testimonials/>
<Faq/>
   </>
  );
};

export default Home;