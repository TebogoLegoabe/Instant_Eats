import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css';

// Import your existing components
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import AppDownload from './components/AppDownload';
import DeliveryShowcase from './components/DeliveryShowcase';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

// Import your actual form components
import DriverApplicationForm from './components/DriverApplicationForm';
import SellerApplicationForm from './components/SellerApplicationForm';

// Home page component with all your sections
const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header isScrolled={isScrolled} />
      <main className="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <DeliveryShowcase />
        <AppDownload />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
};

// Driver application page
const DriverPage = () => {
  return (
    <div>
      <DriverApplicationForm />
    </div>
  );
};

// Seller application page  
const SellerPage = () => {
  return (
    <div>
      <SellerApplicationForm />
    </div>
  );
};

// Main App component
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/become-driver" element={<DriverPage />} />
          <Route path="/become-seller" element={<SellerPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;