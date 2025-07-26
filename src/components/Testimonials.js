import React from 'react';

const Testimonials = () => {
  const whatsappTestimonials = [
    {
      id: 1,
      name: "Customer",
      message: "And that was fast hey",
      response: "That's INSTANT eats for you 👌🔥Thank you for using instant eat Your continues support is highly appreciated 🙏",
      time: "17:45",
      type: "whatsapp",
    },
    {
      id: 2,
      name: "Mako",
      message: "Thanks for speedy delivery ❤️",
      response: "Thank you for using instant eats 🙏 👌",
      time: "13:46",
      type: "whatsapp"
    },
    {
      id: 3,
      name: "Vhusani",
      message: "Got it thank you for top notch service",
      response: "You're welcome, and thank you for your support 🙏",
      time: "19:25",
      type: "whatsapp",
      payment: "R160.00"
    },
    {
      id: 4,
      name: "Rachel",
      message: "We received our order in time, thank you so much 🙏",
      response: "Thank you for using instant eats 🙏",
      time: "11:50",
      type: "whatsapp"
    }
  ];

  const socialTestimonial = {
    id: 5,
    platform: "twitter",
    username: "DR nyambebi (ND)",
    handle: "@nyambeni76",
    time: "45m",
    content: "Had went back home (Thohoyandou) last week. Struggled so much when I wanted to order food online. Until my nephew recommended @InstantEatsza. 👌 I tried the service and I loved it.. 🤣 i ended up just ordering in the whole weekend.",
    engagement: { retweets: 2, likes: 3, views: 23 }
  };

  const WhatsAppCard = ({ testimonial }) => (
    <div className="whatsapp-card">
      <div className="whatsapp-header">
        <div className="whatsapp-contact">
          <div className="contact-avatar">
            <i className="fas fa-user"></i>
          </div>
          <div className="contact-info">
            <span className="contact-name">{testimonial.name}</span>
            <span className="whatsapp-label">WhatsApp</span>
          </div>
        </div>
        <i className="fab fa-whatsapp whatsapp-icon"></i>
      </div>
      
      {testimonial.payment && (
        <div className="payment-notification">
          <div className="payment-icon">✓</div>
          <div className="payment-text">Payment: {testimonial.payment}</div>
        </div>
      )}
      
      <div className="chat-messages">
        <div className="message customer-message">
          <p>{testimonial.message}</p>
          <span className="message-time">{testimonial.time}</span>
        </div>
        <div className="message business-message">
          <p>{testimonial.response}</p>
          <span className="message-time">{testimonial.time}</span>
        </div>
      </div>
    </div>
  );

  const TwitterCard = ({ testimonial }) => (
    <div className="twitter-card">
      <div className="twitter-header">
        <div className="twitter-avatar">
          <i className="fas fa-user-md"></i>
        </div>
        <div className="twitter-info">
          <div className="twitter-name">{testimonial.username}</div>
          <div className="twitter-handle">{testimonial.handle} • {testimonial.time}</div>
        </div>
        <i className="fab fa-twitter twitter-icon"></i>
      </div>
      
      <div className="twitter-content">
        <p>{testimonial.content}</p>
      </div>
      
      <div className="twitter-engagement">
        <span><i className="fas fa-retweet"></i> {testimonial.engagement.retweets}</span>
        <span><i className="fas fa-heart"></i> {testimonial.engagement.likes}</span>
        <span><i className="fas fa-chart-bar"></i> {testimonial.engagement.views}</span>
      </div>
    </div>
  );

  // Create duplicated array for infinite scroll
  const allTestimonials = [
    ...whatsappTestimonials,
    socialTestimonial,
    ...whatsappTestimonials,
    socialTestimonial
  ];

  return (
    <section className="testimonials-real" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Customer Feedback</h2>
          <p>Authentic reviews from our valued customers via WhatsApp and social media</p>
        </div>

        <div className="testimonials-slider">
          <div className="testimonials-track">
            {allTestimonials.map((testimonial, index) => (
              <div key={`${testimonial.id}-${index}`} className="testimonial-slide">
                {testimonial.type === 'whatsapp' ? (
                  <WhatsAppCard testimonial={testimonial} />
                ) : (
                  <TwitterCard testimonial={testimonial} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-real {
          padding: 80px 0;
          background: var(--off-white);
          overflow: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h2 {
          color: var(--primary-black);
          margin-bottom: 1rem;
        }

        .section-header p {
          color: var(--gray-600);
          font-size: 1.1rem;
        }

        .testimonials-slider {
          overflow: hidden;
          mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
          -webkit-mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
        }

        .testimonials-track {
          display: flex;
          gap: 2rem;
          animation: slide 30s linear infinite;
          width: fit-content;
        }

        .testimonials-track:hover {
          animation-play-state: paused;
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .testimonial-slide {
          flex: 0 0 auto;
          width: 320px; /* reduced from 380px */
        }

        /* WhatsApp Card Styles */
        .whatsapp-card {
          background: #075e54;
          border-radius: 12px; /* reduced */
          padding: 0;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12); /* reduced */
          transform: rotate(-1deg);
          transition: transform 0.3s ease;
          font-size: 0.85rem; /* reduced */
        }

        .whatsapp-card:hover {
          transform: rotate(0deg) scale(1.02);
        }

        .whatsapp-header {
          background: #128c7e;
          padding: 0.75rem; /* reduced */
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
        }

        .whatsapp-contact {
          display: flex;
          align-items: center;
          gap: 0.5rem; /* reduced */
        }

        .contact-avatar {
          width: 32px; /* reduced */
          height: 32px; /* reduced */
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1rem; /* reduced */
        }

        .contact-info {
          display: flex;
          flex-direction: column;
        }

        .contact-name {
          font-weight: 600;
          font-size: 0.95rem; /* reduced */
        }

        .whatsapp-label {
          font-size: 0.7rem; /* reduced */
          opacity: 0.8;
        }

        .whatsapp-icon {
          font-size: 1.2rem; /* reduced */
          color: #25d366;
        }

        .payment-notification {
          background: linear-gradient(135deg, #4caf50, #45a049);
          color: white;
          padding: 0.5rem 0.75rem; /* reduced */
          display: flex;
          align-items: center;
          gap: 0.4rem; /* reduced */
          font-size: 0.8rem; /* reduced */
        }

        .payment-icon {
          width: 16px; /* reduced */
          height: 16px; /* reduced */
          background: white;
          color: #4caf50;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.65rem; /* reduced */
        }

        .chat-messages {
          background: #0d1418;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(37, 211, 102, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 80% 70%, rgba(37, 211, 102, 0.08) 1px, transparent 1px);
          background-size: 30px 30px, 50px 50px;
          padding: 1rem 0.75rem; /* reduced */
          min-height: 140px; /* reduced */
        }

        .message {
          margin-bottom: 0.7rem; /* reduced */
          display: flex;
          flex-direction: column;
        }

        .customer-message {
          align-items: flex-start;
        }

        .customer-message p {
          background: #262d31;
          color: white;
          padding: 0.5rem 0.8rem; /* reduced */
          border-radius: 14px 14px 14px 5px; /* reduced */
          margin: 0 0 0.2rem 0;
          max-width: 80%;
          font-size: 0.85rem; /* reduced */
          line-height: 1.3; /* reduced */
        }

        .business-message {
          align-items: flex-end;
        }

        .business-message p {
          background: #005c4b;
          color: white;
          padding: 0.5rem 0.8rem; /* reduced */
          border-radius: 14px 14px 5px 14px; /* reduced */
          margin: 0 0 0.2rem 0;
          max-width: 80%;
          font-size: 0.85rem; /* reduced */
          line-height: 1.3; /* reduced */
        }

        .message-time {
          font-size: 0.65rem; /* reduced */
          color: #8696a0;
          margin: 0 0.4rem; /* reduced */
        }

        /* Twitter Card Styles */
        .twitter-card {
          background: white;
          border: 1px solid #e1e8ed;
          border-radius: 12px; /* reduced */
          padding: 1rem; /* reduced */
          transform: rotate(1deg);
          transition: transform 0.3s ease;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.09); /* reduced */
          font-size: 0.85rem; /* reduced */
        }

        .twitter-card:hover {
          transform: rotate(0deg) scale(1.02);
        }

        .twitter-header {
          display: flex;
          align-items: center;
          gap: 0.5rem; /* reduced */
          margin-bottom: 0.7rem; /* reduced */
        }

        .twitter-avatar {
          width: 36px; /* reduced */
          height: 36px; /* reduced */
          background: linear-gradient(135deg, #1da1f2, #0d8bd9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1rem; /* reduced */
        }

        .twitter-info {
          flex: 1;
        }

        .twitter-name {
          font-weight: 700;
          color: #14171a;
          font-size: 0.9rem; /* reduced */
        }

        .twitter-handle {
          color: #657786;
          font-size: 0.8rem; /* reduced */
        }

        .twitter-icon {
          color: #1da1f2;
          font-size: 1rem; /* reduced */
        }

        .twitter-content p {
          color: #14171a;
          font-size: 0.9rem; /* reduced */
          line-height: 1.4; /* reduced */
          margin: 0 0 0.7rem 0; /* reduced */
        }

        .twitter-engagement {
          display: flex;
          gap: 1.2rem; /* reduced */
          padding-top: 0.5rem; /* reduced */
          border-top: 1px solid #e1e8ed;
        }

        .twitter-engagement span {
          display: flex;
          align-items: center;
          gap: 0.4rem; /* reduced */
          color: #657786;
          font-size: 0.8rem; /* reduced */
        }

        .twitter-engagement i {
          font-size: 0.8rem; /* reduced */
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .testimonials-track {
            gap: 0.7rem;
          }

          .testimonial-slide {
            width: 240px;
          }

          .whatsapp-card,
          .twitter-card {
            transform: none;
          }

          .whatsapp-card:hover,
          .twitter-card:hover {
            transform: scale(1.02);
          }

          .chat-messages {
            min-height: 100px;
            padding: 0.7rem 0.5rem;
          }

          .twitter-card {
            padding: 0.8rem;
          }
        }

        @media (max-width: 576px) {
          .testimonial-slide {
            width: 180px;
          }

          .testimonials-track {
            animation-duration: 40s;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;