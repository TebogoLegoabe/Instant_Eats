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
          width: 380px;
        }

        /* WhatsApp Card Styles */
        .whatsapp-card {
          background: #075e54;
          border-radius: 15px;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
          transform: rotate(-1deg);
          transition: transform 0.3s ease;
        }

        .whatsapp-card:hover {
          transform: rotate(0deg) scale(1.02);
        }

        .whatsapp-header {
          background: #128c7e;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
        }

        .whatsapp-contact {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .contact-avatar {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
        }

        .contact-name {
          font-weight: 600;
          font-size: 1rem;
        }

        .whatsapp-label {
          font-size: 0.75rem;
          opacity: 0.8;
        }

        .whatsapp-icon {
          font-size: 1.5rem;
          color: #25d366;
        }

        .payment-notification {
          background: linear-gradient(135deg, #4caf50, #45a049);
          color: white;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .payment-icon {
          width: 20px;
          height: 20px;
          background: white;
          color: #4caf50;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.75rem;
        }

        .chat-messages {
          background: #0d1418;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(37, 211, 102, 0.1) 2px, transparent 2px),
            radial-gradient(circle at 80% 70%, rgba(37, 211, 102, 0.08) 1px, transparent 1px);
          background-size: 30px 30px, 50px 50px;
          padding: 1.5rem 1rem;
          min-height: 200px;
        }

        .message {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
        }

        .customer-message {
          align-items: flex-start;
        }

        .customer-message p {
          background: #262d31;
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 18px 18px 18px 5px;
          margin: 0 0 0.25rem 0;
          max-width: 80%;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .business-message {
          align-items: flex-end;
        }

        .business-message p {
          background: #005c4b;
          color: white;
          padding: 0.75rem 1rem;
          border-radius: 18px 18px 5px 18px;
          margin: 0 0 0.25rem 0;
          max-width: 80%;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .message-time {
          font-size: 0.7rem;
          color: #8696a0;
          margin: 0 0.5rem;
        }

        /* Twitter Card Styles */
        .twitter-card {
          background: white;
          border: 1px solid #e1e8ed;
          border-radius: 16px;
          padding: 1.5rem;
          transform: rotate(1deg);
          transition: transform 0.3s ease;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .twitter-card:hover {
          transform: rotate(0deg) scale(1.02);
        }

        .twitter-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .twitter-avatar {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #1da1f2, #0d8bd9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
        }

        .twitter-info {
          flex: 1;
        }

        .twitter-name {
          font-weight: 700;
          color: #14171a;
          font-size: 0.95rem;
        }

        .twitter-handle {
          color: #657786;
          font-size: 0.85rem;
        }

        .twitter-icon {
          color: #1da1f2;
          font-size: 1.2rem;
        }

        .twitter-content p {
          color: #14171a;
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0 0 1rem 0;
        }

        .twitter-engagement {
          display: flex;
          gap: 2rem;
          padding-top: 0.75rem;
          border-top: 1px solid #e1e8ed;
        }

        .twitter-engagement span {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #657786;
          font-size: 0.85rem;
        }

        .twitter-engagement i {
          font-size: 0.9rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .testimonials-track {
            gap: 1rem;
          }

          .testimonial-slide {
            width: 320px;
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
            min-height: 180px;
            padding: 1rem 0.75rem;
          }

          .twitter-card {
            padding: 1.25rem;
          }
        }

        @media (max-width: 576px) {
          .testimonial-slide {
            width: 280px;
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