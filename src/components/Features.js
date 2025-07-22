import React from 'react';

const Features = () => {
  const features = [
    {
      icon: "fas fa-motorcycle",
      title: "Professional Delivery Team",
      description: "Our trained delivery professionals ensure your orders arrive safely and on time, every time."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Safe & Secure Packaging",
      description: "We use premium packaging materials to keep your food fresh and your groceries secure during transport."
    },
    {
      icon: "fas fa-clock",
      title: "Real-Time Tracking",
      description: "Track your delivery in real-time and get accurate arrival estimates with our advanced tracking system."
    },
    {
      icon: "fas fa-store",
      title: "Multiple Service Types",
      description: "From restaurant delivery to grocery shopping, we handle all your delivery needs with one reliable service."
    },
    {
      icon: "fas fa-users",
      title: "Trusted Local Team",
      description: "Our local delivery team knows your area and is committed to providing exceptional service to your community."
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Easy Mobile Ordering",
      description: "Place orders quickly and easily through our mobile platform, designed for convenience and speed."
    }
  ];

  return (
    <section className="section section-light features" id="features">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Us</h2>
          <p>
            We combine professional service with cutting-edge technology to deliver 
            an exceptional experience for every order.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <i className={feature.icon}></i>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;