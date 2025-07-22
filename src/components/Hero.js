import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>we deliver what you need when you need it!</h1>
          <p>
            Experience reliable, fast delivery with our professional team. From restaurant meals to grocery shopping, 
            we bring everything you need right to your doorstep with our trusted delivery network.
          </p>
          <div className="hero-buttons">
            <a href="#" className="btn">Start Ordering</a>
            <a href="#features" className="btn btn-light">Our Services</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;