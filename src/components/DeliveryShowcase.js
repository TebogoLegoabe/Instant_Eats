import React from 'react';

const DeliveryShowcase = () => {
  return (
    <section className="delivery-showcase section section-light">
      <div className="container">
        <div className="section-header">
          <h2>See Us in Action</h2>
          <p>
            Real moments from our daily deliveries, see the care and attention we put to every delivery.
          </p>
        </div>

        <div className="showcase-grid-single-row">
          <div className="showcase-item-tiny">
            <img 
              src={require('../Image/dele1.jpg')}
              alt="Professional Delivery Service"
              className="team-photo-tiny"
            />
            <h6>Professional Equipment</h6>
            <p>Reliable motorcycles and branded delivery equipment.</p>
          </div>

          <div className="showcase-item-tiny">
            <img 
              src={require('../Image/dele2.jpg')}
              alt="Quality Packaging"
              className="team-photo-tiny"
            />
            <h6>Quality Packaging</h6>
            <p>Premium bags that keep your food fresh and secure.</p>
          </div>

          <div className="showcase-item-tiny">
            <img 
              src={require('../Image/dele3.jpg')}
              alt="Instant Branded Service"
              className="team-photo-tiny"
            />
            <h6>Branded Delivery</h6>
            <p>Professional Instant-branded packaging and service.</p>
          </div>

          <div className="showcase-item-tiny">
            <img 
              src={require('../Image/dele5.jpg')}
              alt="Service in Action"
              className="team-photo-tiny"
            />
            <h6>Service in Action</h6>
            <p>Real delivery moments showing our commitment.</p>
          </div>

           <div className="showcase-item-tiny">
            <img 
              src={require('../Image/dele6.jpg')}
              alt="Customer Care"
              className="team-photo-tiny"
            />
            <h6>Customer Care</h6>
            <p>Personal attention and care for every delivery.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeliveryShowcase;