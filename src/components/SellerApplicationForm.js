import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SellerApplicationForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    ownerName: '',
    email: '',
    phone: '',
    businessAddress: '',
    businessDescription: '',
    cuisine: '',
    operatingHours: '',
    deliveryRadius: '',
    averageOrderValue: '',
    monthlyOrders: '',
    hasLicense: '',
    bankAccount: '',
    taxNumber: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Seller Application:', formData);
    alert('Application submitted successfully! Our partnership team will contact you within 2 business days.');
  };

  return (
    <div className="seller-application-container">
      <div className="form-wrapper">
        <div className="form-header">
          <div className="back-to-home">
            <Link to="/" className="back-btn">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
          </div>
          <div className="form-icon">
            <i className="fas fa-store"></i>
          </div>
          <h1>Become a Seller</h1>
          <p>Partner with Instant Eats </p>
        </div>

        <div className="application-form">
          <div className="form-section">
            <h3><i className="fas fa-building"></i> Business Information</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label>Business Name*</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Enter your business name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Business Type*</label>
                <select
                  name="businessType"
                  value={formData.businessType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Business Type</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="cafe">Cafe</option>
                  <option value="fast-food">Fast Food</option>
                  <option value="bakery">Bakery</option>
                  <option value="grocery">Grocery Store</option>
                  <option value="pharmacy">Pharmacy</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Owner/Manager Name*</label>
                <input
                  type="text"
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Cuisine Type</label>
                <select
                  name="cuisine"
                  value={formData.cuisine}
                  onChange={handleInputChange}
                >
                  <option value="">Select Cuisine</option>
                  <option value="south-african">South African</option>
                  <option value="italian">Italian</option>
                  <option value="chinese">Chinese</option>
                  <option value="indian">Indian</option>
                  <option value="american">American</option>
                  <option value="mexican">Mexican</option>
                  <option value="pizza">Pizza</option>
                  <option value="burger">Burgers</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Business Address*</label>
              <input
                type="text"
                name="businessAddress"
                value={formData.businessAddress}
                onChange={handleInputChange}
                placeholder="Full business address"
                required
              />
            </div>

            <div className="form-group">
              <label>Business Description*</label>
              <textarea
                name="businessDescription"
                value={formData.businessDescription}
                onChange={handleInputChange}
                placeholder="Describe your business, what makes it unique..."
                rows="4"
                required
              />
            </div>
          </div>

          <div className="form-section">
            <h3><i className="fas fa-phone"></i> Contact Information</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label>Business Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="business@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label>Business Phone*</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+27"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Operating Hours*</label>
                <input
                  type="text"
                  name="operatingHours"
                  value={formData.operatingHours}
                  onChange={handleInputChange}
                  placeholder="e.g., Mon-Fri: 9AM-9PM"
                  required
                />
              </div>
              <div className="form-group">
                <label>Delivery Radius (km)*</label>
                <select
                  name="deliveryRadius"
                  value={formData.deliveryRadius}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Radius</option>
                  <option value="5km">Up to 5km</option>
                  <option value="10km">Up to 10km</option>
                  <option value="15km">Up to 15km</option>
                  <option value="20km">Up to 20km</option>
                  <option value="unlimited">Unlimited</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3><i className="fas fa-chart-line"></i> Business Metrics</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label>Average Order Value</label>
                <select
                  name="averageOrderValue"
                  value={formData.averageOrderValue}
                  onChange={handleInputChange}
                >
                  <option value="">Select Range</option>
                  <option value="0-50">R0 - R50</option>
                  <option value="51-100">R51 - R100</option>
                  <option value="101-200">R101 - R200</option>
                  <option value="201-500">R201 - R500</option>
                  <option value="500+">R500+</option>
                </select>
              </div>
              <div className="form-group">
                <label>Monthly Orders (Current)</label>
                <select
                  name="monthlyOrders"
                  value={formData.monthlyOrders}
                  onChange={handleInputChange}
                >
                  <option value="">Select Range</option>
                  <option value="0-50">0 - 50 orders</option>
                  <option value="51-100">51 - 100 orders</option>
                  <option value="101-200">101 - 200 orders</option>
                  <option value="201-500">201 - 500 orders</option>
                  <option value="500+">500+ orders</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3><i className="fas fa-file-alt"></i> Legal & Financial</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label>Business License*</label>
                <select
                  name="hasLicense"
                  value={formData.hasLicense}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Option</option>
                  <option value="yes">Yes, I have a valid license</option>
                  <option value="no">No, but applying</option>
                  <option value="help">Need help obtaining one</option>
                </select>
              </div>
              <div className="form-group">
                <label>Tax Number</label>
                <input
                  type="text"
                  name="taxNumber"
                  value={formData.taxNumber}
                  onChange={handleInputChange}
                  placeholder="VAT/Tax Registration Number"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Bank Account Details*</label>
              <select
                name="bankAccount"
                value={formData.bankAccount}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Option</option>
                <option value="business">Business Bank Account</option>
                <option value="personal">Personal Bank Account</option>
                <option value="need-help">Need help setting up</option>
              </select>
            </div>
          </div>
          <div className="form-navigation">
            <button type="button" onClick={handleSubmit} className="btn-submit">
              Submit Application <i className="fas fa-handshake"></i>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* BRAND COLORS: Yellow #FFD700, Black #1A1A1A, White #FFFFFF, Orange #FF8C00 */
        
        .seller-application-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #1A1A1A 0%, #333333 100%);
          padding: 2rem 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-wrapper {
          background: #FFFFFF;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 800px;
          overflow: hidden;
          border: 2px solid #FFD700;
        }

        .form-header {
          background: linear-gradient(135deg, #FFD700, #FF8C00);
          color: #1A1A1A;
          text-align: center;
          padding: 2rem;
          position: relative;
        }

        .back-to-home {
          position: absolute;
          top: 1rem;
          left: 1rem;
        }

        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 8px 16px;
          background: rgba(26, 26, 26, 0.1);
          color: #1A1A1A;
          text-decoration: none;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          border: 2px solid #1A1A1A;
        }

        .back-btn:hover {
          background: #1A1A1A;
          color: #FFFFFF;
          transform: translateY(-2px);
        }

        .form-icon {
          width: 80px;
          height: 80px;
          background: rgba(26, 26, 26, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          border: 2px solid #1A1A1A;
        }

        .form-icon i {
          font-size: 2rem;
          color: #1A1A1A;
        }

        .form-header h1 {
          font-size: 2rem;
          margin: 0 0 0.5rem 0;
          font-weight: 700;
          color: #1A1A1A;
        }

        .form-header p {
          margin: 0;
          opacity: 0.9;
          font-size: 1.1rem;
          color: #1A1A1A;
          font-weight: 600;
        }

        .application-form {
          padding: 2rem;
          max-height: 70vh;
          overflow-y: auto;
          background: #FFFFFF;
        }

        .form-section {
          margin-bottom: 3rem;
          padding-bottom: 2rem;
          border-bottom: 2px solid #FFD700;
        }

        .form-section:last-child {
          border-bottom: none;
        }

        .form-section h3 {
          color: #1A1A1A;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.2rem;
          font-weight: 700;
        }

        .form-section h3 i {
          color: #FF8C00;
          font-size: 1.3rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 600;
          color: #1A1A1A;
          font-size: 1rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #1A1A1A;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #FFFFFF;
          font-family: inherit;
          color: #1A1A1A;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #FFD700;
          box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.2);
          background: #FFFEF8;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .benefits-section {
          background: linear-gradient(135deg, #FFD700, #FF8C00);
          padding: 2rem;
          border-radius: 12px;
          margin: 2rem 0;
          border: 2px solid #1A1A1A;
        }

        .benefits-section h3 {
          text-align: center;
          color: #1A1A1A;
          margin-bottom: 2rem;
          font-weight: 700;
          font-size: 1.4rem;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1.5rem;
        }

        .benefit-item {
          text-align: center;
          padding: 1rem;
          background: #FFFFFF;
          border-radius: 8px;
          border: 2px solid #1A1A1A;
          transition: all 0.3s ease;
        }

        .benefit-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(26, 26, 26, 0.2);
        }

        .benefit-item i {
          font-size: 2rem;
          color: #FF8C00;
          margin-bottom: 1rem;
        }

        .benefit-item h4 {
          color: #1A1A1A;
          margin-bottom: 0.5rem;
          font-size: 1rem;
          font-weight: 700;
        }

        .benefit-item p {
          color: #1A1A1A;
          font-size: 0.9rem;
          margin: 0;
          opacity: 0.8;
        }

        .form-navigation {
          text-align: center;
          margin-top: 2rem;
        }

        .btn-submit {
          background: linear-gradient(135deg, #FFD700, #FF8C00);
          color: #1A1A1A;
          border: 2px solid #1A1A1A;
          padding: 16px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
        }

        .btn-submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255, 215, 0, 0.6);
          background: linear-gradient(135deg, #FF8C00, #FFD700);
        }

        .btn-submit:active {
          transform: translateY(0);
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .seller-application-container {
            padding: 1rem;
          }

          .back-to-home {
            position: static;
            text-align: left;
            margin-bottom: 1rem;
          }

          .back-btn {
            font-size: 0.8rem;
            padding: 6px 12px;
          }

          .form-header {
            padding: 1.5rem;
            text-align: center;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .benefits-grid {
            grid-template-columns: 1fr 1fr;
          }

          .form-header h1 {
            font-size: 1.5rem;
          }

          .application-form {
            padding: 1.5rem;
            max-height: none;
          }
        }

        @media (max-width: 480px) {
          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default SellerApplicationForm;