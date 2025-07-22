import React from 'react';

const AppDownload = () => {
  return (
    <section className="app-download app-download-compact" id="app">
      <div className="container">
        <div className="app-container app-container-compact">
          <div className="app-content">
            <h2>Order Through Our Platform</h2>
            <p>
              Get convenient access to our professional delivery services through multiple 
              ordering channels. Whether you prefer calling, messaging, or using our online 
              platform, we make it easy to get what you need.
            </p>

            <div className="download-buttons">
              <a href="tel:+27748373221" className="download-btn">
                <i className="fas fa-phone"></i>
                <div>
                  <small>Call us at</small>
                  <div>074 837 3121</div>
                </div>
              </a>

              <a href="https://wa.me/27748373121" className="download-btn">
                <i className="fab fa-whatsapp"></i>
                <div>
                  <small>Message us on</small>
                  <div>WhatsApp</div>
                </div>
              </a>
            </div>
          </div>

          <div className="app-image app-image-compact">
            <img 
              src={require('../Image/team.jpg')}
              alt="Our Complete Team"
              className="team-photo"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .app-download-compact {
          padding: 60px 0 !important;
        }

        .app-container-compact {
          gap: 2rem !important;
          align-items: center;
        }

        .app-image-compact {
          max-width: 700px;
          margin: 0 auto;
        }

        .app-image-compact img {
          max-width: 100%;
          width: 450px;
          height: 250px;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .app-content h2 {
          margin-bottom: 1rem !important;
        }

        .app-content p {
          margin-bottom: 1.5rem !important;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .app-download-compact {
            padding: 40px 0 !important;
          }

          .app-container-compact {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            text-align: center;
          }

          .app-image-compact img {
            width: 300px;
            height: 200px;
          }
        }

        @media (max-width: 576px) {
          .app-image-compact img {
            width: 250px;
            height: 170px;
          }
        }
      `}</style>
    </section>
  );
};

export default AppDownload;