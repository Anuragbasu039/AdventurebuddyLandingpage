// src/Navbar.js
import React, { useState } from 'react';
import './style.css';
import logo from '../../assets/NEW LOGO COLOUR copy.png'; // Adjust the path to your logo image

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      
      <div className="logo">
        <a href="/">
          <img src={logo} alt="The Adventure Buddy" />
        </a>
      </div>
      <div className={`nav-links ${isMobileMenuOpen ? 'nav-links-mobile' : ''}`}>
        <a href="/" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#gallary" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
        <a href="#offer" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Activities</a>
        <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </div>
      <div className="menu-toggle" onClick={handleMobileMenuToggle}>
        <span className={`bar ${isMobileMenuOpen ? 'rotate1' : ''}`}></span>
        <span className={`bar ${isMobileMenuOpen ? 'fade' : ''}`}></span>
        <span className={`bar ${isMobileMenuOpen ? 'rotate2' : ''}`}></span>
      </div>
    </div>
  );
};

export default Navbar;
