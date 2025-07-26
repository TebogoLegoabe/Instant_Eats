import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundColor: 'orange' }}>
      <div className="container">
        <div className="hero-content">
          <h1>we deliver what you need when you need it!</h1>
          <p>
            Experience reliable, fast delivery with our professional team. From restaurant meals to grocery shopping, 
            we bring everything you need right to your doorstep with our trusted delivery network.
          </p>
          <div className="hero-buttons">
            <Link to="/become-driver" className="btn btn-light">
              Become a Driver
            </Link>
            
            <a href="tel:+27748373121" className="btn">
              Start Ordering
            </a>
            
            <Link to="/become-seller" className="btn btn-light">
              Become a Seller
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;