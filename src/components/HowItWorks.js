import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Place Your Order",
      description: "Call us or send a WhatsApp message with what you need."
    },
    {
      number: 2,
      title: "Professional Preparation",
      description: "We handle your order with care and premium packaging."
    },
    {
      number: 3,
      title: "Expert Delivery",
      description: "Our local team picks it up and brings it straight to you."
    },
    {
      number: 4,
      title: "Delivered Fresh",
      description: "Get your order in perfect condition, right to your door"
    }
  ];

  return (
    <section className="section section-white how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>
          Four simple steps to get everything you need, delivered fast and fresh. 
        Experience the convenience of our professional delivery service, designed to meet your needs.
          </p>
        </div>

        <div className="steps">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;