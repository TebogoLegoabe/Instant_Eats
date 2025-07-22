import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DeliveryShowcase from './components/DeliveryShowcase.js';
import AppDownload from './components/AppDownload';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="instant-eats">
      <Header isScrolled={isScrolled} />
      <Hero />
      <Features />
      <HowItWorks />
      <DeliveryShowcase />
      <AppDownload />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;