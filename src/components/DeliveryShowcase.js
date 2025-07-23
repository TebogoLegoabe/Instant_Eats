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

        <div className="showcase-grid-responsive">
          <div className="showcase-item-responsive">
            <img 
              src={require('../Image/dele1.jpg')}
              alt="Professional Delivery Service"
              className="team-photo-responsive"
            />
            <h6>Professional Equipment</h6>
            <p>Reliable motorcycles and branded delivery equipment.</p>
          </div>

          <div className="showcase-item-responsive">
            <img 
              src={require('../Image/dele2.jpg')}
              alt="Quality Packaging"
              className="team-photo-responsive"
            />
            <h6>Quality Packaging</h6>
            <p>Premium bags that keep your food fresh and secure.</p>
          </div>

          <div className="showcase-item-responsive">
            <img 
              src={require('../Image/dele3.jpg')}
              alt="Instant Branded Service"
              className="team-photo-responsive"
            />
            <h6>Branded Delivery</h6>
            <p>Professional Instant-branded packaging and service.</p>
          </div>

          <div className="showcase-item-responsive">
            <img 
              src={require('../Image/dele8.jpg')}
              alt="Service in Action"
              className="team-photo-responsive"
            />
            <h6>Service in Action</h6>
            <p>Real delivery moments showing our commitment.</p>
          </div>

          <div className="showcase-item-responsive">
            <img 
              src={require('../Image/dele6.jpg')}
              alt="Customer Care"
              className="team-photo-responsive"
            />
            <h6>Customer Care</h6>
            <p>Personal attention and care for every delivery.</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Responsive Grid Layout */
        .showcase-grid-responsive {
          display: grid;
          gap: 2rem;
          margin-top: 2.5rem;
          
          /* Desktop: 3 cards top, 2 cards bottom (centered) */
          grid-template-columns: repeat(3, 1fr);
          grid-template-areas: 
            "card1 card2 card3"
            ". card4 card5 .";
        }

        .showcase-item-responsive:nth-child(1) { grid-area: card1; }
        .showcase-item-responsive:nth-child(2) { grid-area: card2; }
        .showcase-item-responsive:nth-child(3) { grid-area: card3; }
        .showcase-item-responsive:nth-child(4) { grid-area: card4; }
        .showcase-item-responsive:nth-child(5) { grid-area: card5; }

        .showcase-item-responsive {
          text-align: center;
          padding: 2rem 1.5rem;
          background: var(--pure-white, #FFFFFF);
          border-radius: var(--radius-lg, 16px);
          box-shadow: var(--shadow-sm, 0 2px 4px rgba(0, 0, 0, 0.1));
          transition: var(--transition-normal, all 0.3s ease);
          border: 1px solid var(--gray-200, #E9ECEF);
          position: relative;
          overflow: hidden;
        }

        .showcase-item-responsive::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--primary-yellow, #FFD700), var(--primary-orange, #FF8C00));
          opacity: 0;
          transition: var(--transition-normal, all 0.3s ease);
        }

        .showcase-item-responsive:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg, 0 8px 25px rgba(0, 0, 0, 0.2));
        }

        .showcase-item-responsive:hover::before {
          opacity: 1;
        }

        .team-photo-responsive {
          width: 100%;
          max-width: 280px;
          height: 200px;
          object-fit: cover;
          border-radius: var(--radius-md, 12px);
          box-shadow: var(--shadow-sm, 0 2px 4px rgba(0, 0, 0, 0.1));
          margin-bottom: 1.5rem;
          transition: var(--transition-normal, all 0.3s ease);
        }

        .showcase-item-responsive:hover .team-photo-responsive {
          transform: scale(1.02);
          box-shadow: var(--shadow-md, 0 4px 12px rgba(0, 0, 0, 0.15));
        }

        .showcase-item-responsive h6 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: var(--primary-black, #1A1A1A);
        }

        .showcase-item-responsive p {
          font-size: 0.95rem;
          color: var(--gray-600, #6C757D);
          line-height: 1.5;
          margin-bottom: 0;
        }

        /* Large Desktop: 5 cards in a row */
        @media (min-width: 1400px) {
          .showcase-grid-responsive {
            grid-template-columns: repeat(5, 1fr);
            grid-template-areas: "card1 card2 card3 card4 card5";
            gap: 1.5rem;
          }

          .showcase-item-responsive {
            padding: 1.5rem 1rem;
          }

          .team-photo-responsive {
            height: 180px;
            max-width: 220px;
          }
        }

        /* Tablet: 2 cards per row, 5th card centered */
        @media (max-width: 992px) {
          .showcase-grid-responsive {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas: 
              "card1 card2"
              "card3 card4"
              ". card5 .";
            gap: 1.5rem;
          }

          .team-photo-responsive {
            height: 180px;
            max-width: 250px;
          }

          .showcase-item-responsive {
            padding: 1.5rem 1rem;
          }
        }

        /* Small Tablet */
        @media (max-width: 768px) {
          .showcase-grid-responsive {
            grid-template-areas: 
              "card1 card2"
              "card3 card4"
              "card5 card5"; /* 5th card spans full width */
            gap: 1.25rem;
          }

          .showcase-item-responsive {
            padding: 1.25rem 1rem;
          }

          .team-photo-responsive {
            height: 160px;
          }

          .showcase-item-responsive h6 {
            font-size: 1.1rem;
          }

          .showcase-item-responsive p {
            font-size: 0.9rem;
          }
        }

        /* Mobile: 1 card per row */
        @media (max-width: 576px) {
          .showcase-grid-responsive {
            grid-template-columns: 1fr;
            gap: 1rem;
            grid-template-areas: 
              "card1"
              "card2"
              "card3"
              "card4"
              "card5";
          }

          .showcase-item-responsive {
            padding: 1rem 0.75rem;
          }

          .team-photo-responsive {
            height: 140px;
            max-width: 200px;
          }

          .showcase-item-responsive h6 {
            font-size: 1rem;
            margin-bottom: 0.5rem;
          }

          .showcase-item-responsive p {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
};

export default DeliveryShowcase;