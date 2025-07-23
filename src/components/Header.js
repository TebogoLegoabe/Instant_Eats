import React, { useState } from 'react';

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          Instant Eats
        </a>

        <div className="menu-toggle" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </div>

        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#features" onClick={closeMenu}>Services</a></li>
            <li><a href="#how-it-works" onClick={closeMenu}>How It Works</a></li>
            <li><a href="#app" onClick={closeMenu}>Contact</a></li>
            <li><a href="#testimonials" onClick={closeMenu}>Reviews</a></li>
            <li><a href="#footer" onClick={closeMenu}>About</a></li>
            <li className="auth-buttons">
              <button className="btn btn-light" onClick={closeMenu}>Login</button>
              <button className="btn" onClick={closeMenu}>Sign up</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;