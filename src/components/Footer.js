import React from 'react';

const Footer = () => {
  const footerLinks = {
    quickLinks: [
      { name: "Home", href: "#" },
      { name: "Our Services", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Contact Us", href: "#app" },
      { name: "Our Team", href: "#testimonials" }
    ],
    services: [
      { name: "Food Delivery", href: "#" },
      { name: "Grocery Shopping", href: "#" },
      { name: "Package Delivery", href: "#" },
      { name: "Bulk Orders", href: "#" },
      { name: "Business Delivery", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: "fab fa-facebook-f", href: "https://www.facebook.com/share/1YKnAmQEp7/?mibextid=wwXIfr", type: "icon" },
    { icon: "x-logo", href: "https://x.com/instanteatsza?s=11", type: "custom" },
    { icon: "fab fa-instagram", href: "https://www.instagram.com/instanteatsza", type: "icon" },
    { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/company/instant-eats/", type: "icon" },
    { icon: "fab fa-tiktok", href: "https://www.tiktok.com/@instanteatsza?_r=1&_d=ek8l046j7f76l9&sec_uid=MS4wLjABAAAAXJwyZeaOVg1CBZl6UNuz7Lg7rCBjGhJT3jIRtR_Q8ALw3HkE33fIp832YG8v-NAt&share_author_id=7148537898194420738&sharer_language=en&source=h5_m&u_code=e44db99abk2jik&ug_btm=b5836,b0&sec_user_id=MS4wLjABAAAAXJwyZeaOVg1CBZl6UNuz7Lg7rCBjGhJT3jIRtR_Q8ALw3HkE33fIp832YG8v-NAt&utm_source=copy&social_share_type=5&utm_campaign=client_share&utm_medium=ios&tt_from=copy&user_id=7148537898194420738&enable_checksum=1&share_link_id=40D9C57E-C368-40BC-A515-4A452953E087&share_app_id=1233", type: "icon" }
  ];

  const contactInfo = [
    { icon: "fas fa-map-marker-alt", text: "Thohoyandou, Limpopo, South Africa" },
    { icon: "fas fa-phone", text: "+27 74 837 3121", href: "tel:+27748373121" },
    { icon: "fas fa-envelope", text: "admin@instanteats.co.za", href: "mailto:admin@instanteats.co.za" }
  ];

  return (
    <footer className="footer-compact-4col" id="footer">
      <div className="container">
        <div className="footer-grid-compact">
          <div className="footer-col">
            <h3>Instant Eats</h3>
            <p>
              Your trusted local delivery partner. We provide professional, reliable 
              delivery services for food, groceries, and packages throughout Thohoyandou.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.type === "custom" ? (
                    <span className="x-logo-svg">X</span>
                  ) : (
                    <i className={social.icon}></i>
                  )}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Our Services</h3>
            <ul>
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h3>Contact Information</h3>
            <ul className="contact-list">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <i className={contact.icon}></i> 
                  {contact.href ? (
                    <a href={contact.href}>{contact.text}</a>
                  ) : (
                    <span>{contact.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="copyright-compact">
          <p>
            &copy; 2025 Instant Eats. All rights reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer-compact-4col {
          background: var(--primary-black);
          color: var(--pure-white);
          padding: 2.5rem 0 1rem;
        }

        .footer-grid-compact {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        .footer-col h3 {
          color: var(--pure-white);
          margin-bottom: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .footer-col p {
          color: var(--gray-400);
          margin-bottom: 1.25rem;
          line-height: 1.5;
          font-size: 0.9rem;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-col ul li {
          margin-bottom: 0.5rem;
        }

        .footer-col ul li a {
          color: var(--gray-400);
          text-decoration: none;
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        .footer-col ul li a:hover {
          color: var(--primary-yellow);
          padding-left: 3px;
        }

        .contact-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.6rem;
        }

        .contact-list i {
          color: var(--primary-orange);
          width: 16px;
          font-size: 0.9rem;
        }

        .contact-list a {
          color: var(--gray-400);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .contact-list a:hover {
          color: var(--primary-yellow);
          padding-left: 0 !important;
        }

        .contact-list span {
          color: var(--gray-400);
          font-size: 0.9rem;
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          background: var(--gray-800);
          color: var(--pure-white);
          border-radius: 50%;
          transition: var(--transition-normal);
          text-decoration: none;
        }

        .social-links a:hover {
          background: linear-gradient(135deg, var(--primary-yellow), var(--primary-orange));
          color: var(--primary-black);
          transform: translateY(-2px);
        }

        .x-logo-svg {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          font-size: 1.1rem;
          font-weight: 900;
          display: flex;
          align-items: center;
          justify-content: center;
          letter-spacing: -0.05em;
        }

        .copyright-compact {
          text-align: center;
          padding-top: 1.25rem;
          border-top: 1px solid var(--gray-700);
        }

        .copyright-compact p {
          color: var(--gray-400);
          font-size: 0.85rem;
          margin: 0;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .footer-grid-compact {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .footer-compact-4col {
            padding: 2rem 0 1rem;
          }

          .footer-grid-compact {
            grid-template-columns: 1fr;
            gap: 1.25rem;
          }

          .footer-col {
            text-align: center;
          }

          .contact-list {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .footer-compact-4col {
            padding: 1.5rem 0 1rem;
          }

          .footer-col h3 {
            font-size: 1rem;
            margin-bottom: 0.75rem;
          }

          .footer-col p {
            font-size: 0.85rem;
            margin-bottom: 1rem;
          }

          .social-links a {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;