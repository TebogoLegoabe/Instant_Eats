import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DriverApplicationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    nationality: 'South African',
    criminalRecord: '',
    transportation: '',
    vehicleMake: '',
    location: '',
    province: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Driver Application:', formData);
    alert('Application submitted successfully! We will contact you soon.');
  };

  return (
    <div className="application-container">
      <div className="form-wrapper">
        <div className="form-header">
          <div className="back-to-home">
            <Link to="/" className="back-btn">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
          </div>
          <div className="form-icon">
            <i className="fas fa-truck"></i>
          </div>
          <h1>Become a Driver</h1>
          <p>Join our team of professional delivery drivers</p>
        </div>

        <div className="form-tabs">
          <button 
            className={`tab ${currentStep === 1 ? 'active' : ''}`}
            onClick={() => setCurrentStep(1)}
          >
            Your Information
          </button>
          <button 
            className={`tab ${currentStep === 2 ? 'active' : ''}`}
            onClick={() => setCurrentStep(2)}
          >
            Your Documents
          </button>
        </div>

        <div className="application-form">
          {currentStep === 1 && (
            <div className="form-step">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name*</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name*</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Date of Birth*</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Gender*</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">I prefer not to say</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Phone*</label>
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

              <div className="form-navigation">
                <button type="button" onClick={() => setCurrentStep(2)} className="btn-next">
                  Next Step <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="form-step">
              <div className="form-group">
                <label>Nationality*</label>
                <select
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  required
                >
                  <option value="South African">South African</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Criminal Record*</label>
                <select
                  name="criminalRecord"
                  value={formData.criminalRecord}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Please Select</option>
                  <option value="none">No Criminal Record</option>
                  <option value="minor">Minor Offenses</option>
                  <option value="major">Major Offenses</option>
                </select>
              </div>

              <div className="form-group">
                <label>Mode of Transportation*</label>
                <select
                  name="transportation"
                  value={formData.transportation}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Please Select</option>
                  <option value="motorcycle">Motorcycle</option>
                  <option value="car">Car</option>
                  <option value="bicycle">Bicycle</option>
                  <option value="scooter">Scooter</option>
                </select>
              </div>

              <div className="form-group">
                <label>Vehicle Make and Model*</label>
                <input
                  type="text"
                  name="vehicleMake"
                  value={formData.vehicleMake}
                  onChange={handleInputChange}
                  placeholder="e.g., Honda CB125F"
                  required
                />
              </div>

              <div className="form-group">
                <label>Location*</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder="Enter your location"
                  required
                />
              </div>

              <div className="form-group">
                <label>Province*</label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Province</option>
                  <option value="Limpopo">Limpopo</option>
                  <option value="Gauteng">Gauteng</option>
                  <option value="Western Cape">Western Cape</option>
                  <option value="Eastern Cape">Eastern Cape</option>
                  <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                  <option value="Free State">Free State</option>
                  <option value="Mpumalanga">Mpumalanga</option>
                  <option value="North West">North West</option>
                  <option value="Northern Cape">Northern Cape</option>
                </select>
              </div>

              <div className="document-upload">
                <h3>Required Documents</h3>
                <p>Please prepare the following documents for upload:</p>
                <ul>
                  <li>Valid Driver's License</li>
                  <li>ID Document/Passport</li>
                  <li>Vehicle Registration (if applicable)</li>
                  <li>Proof of Address</li>
                </ul>
                <button type="button" className="btn-upload">
                  <i className="fas fa-upload"></i> Upload Documents
                </button>
              </div>

              <div className="form-navigation">
                <button type="button" onClick={() => setCurrentStep(1)} className="btn-prev">
                  <i className="fas fa-arrow-left"></i> Previous
                </button>
                <button type="button" onClick={handleSubmit} className="btn-submit">
                  Submit Application <i className="fas fa-check"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        /* BRAND COLORS: Yellow #FFD700, Black #1A1A1A, White #FFFFFF, Orange #FF8C00 */
        
        .application-container {
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
          max-width: 600px;
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

        .form-tabs {
          display: flex;
          background: #FFFFFF;
          border-bottom: 2px solid #FFD700;
        }

        .tab {
          flex: 1;
          padding: 1rem;
          background: #FFFFFF;
          border: none;
          font-weight: 600;
          color: #1A1A1A;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          border-bottom: 3px solid transparent;
        }

        .tab:hover {
          background: #FFFEF8;
          color: #FF8C00;
        }

        .tab.active {
          background: #FF8C00;
          color: #FFFFFF;
          border-bottom-color: #1A1A1A;
        }

        .application-form {
          padding: 2rem;
          background: #FFFFFF;
        }

        .form-step {
          animation: fadeIn 0.5s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
        .form-group select {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #1A1A1A;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: #FFFFFF;
          color: #1A1A1A;
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #FFD700;
          box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.2);
          background: #FFFEF8;
        }

        .document-upload {
          background: linear-gradient(135deg, #FFD700, #FF8C00);
          padding: 1.5rem;
          border-radius: 12px;
          margin: 2rem 0;
          text-align: center;
          border: 2px solid #1A1A1A;
        }

        .document-upload h3 {
          color: #1A1A1A;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .document-upload p {
          color: #1A1A1A;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .document-upload ul {
          text-align: left;
          max-width: 300px;
          margin: 1rem auto;
          padding-left: 1.5rem;
          background: #FFFFFF;
          border-radius: 8px;
          padding: 1rem 1rem 1rem 2rem;
          border: 2px solid #1A1A1A;
        }

        .document-upload li {
          margin-bottom: 0.5rem;
          color: #1A1A1A;
          font-weight: 500;
        }

        .btn-upload {
          background: #1A1A1A;
          color: #FFFFFF;
          border: 2px solid #FFFFFF;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-upload:hover {
          background: #FFFFFF;
          color: #1A1A1A;
          border-color: #1A1A1A;
          transform: translateY(-2px);
        }

        .form-navigation {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
          gap: 1rem;
        }

        .btn-prev,
        .btn-next,
        .btn-submit {
          padding: 12px 24px;
          border: 2px solid #1A1A1A;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1rem;
        }

        .btn-prev {
          background: #FFFFFF;
          color: #1A1A1A;
        }

        .btn-prev:hover {
          background: #1A1A1A;
          color: #FFFFFF;
        }

        .btn-next {
          background: linear-gradient(135deg, #FFD700, #FF8C00);
          color: #1A1A1A;
          margin-left: auto;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
        }

        .btn-next:hover {
          background: linear-gradient(135deg, #FF8C00, #FFD700);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
        }

        .btn-submit {
          background: linear-gradient(135deg, #FFD700, #FF8C00);
          color: #1A1A1A;
          margin-left: auto;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
        }

        .btn-submit:hover {
          background: linear-gradient(135deg, #FF8C00, #FFD700);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
        }

        .btn-prev:active,
        .btn-next:active,
        .btn-submit:active {
          transform: translateY(0);
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .application-container {
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

          .form-header h1 {
            font-size: 1.5rem;
          }

          .application-form {
            padding: 1.5rem;
          }

          .form-navigation {
            flex-direction: column;
          }

          .btn-next,
          .btn-submit {
            margin-left: 0;
            width: 100%;
            justify-content: center;
          }

          .btn-prev {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default DriverApplicationForm;