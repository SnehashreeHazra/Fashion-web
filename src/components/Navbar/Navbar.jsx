import React, { useState } from 'react'
import "./Navbar.css"
import Logo from './images/logo.png'
import FacebookImage from '../../assets/facebook.png'
import InstagramImage from '../../assets/instagram.png'
import TwitterImage from '../../assets/twitter.png'
import LinkedinImage from '../../assets/linkedin.png'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header-container">
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <img src={Logo} alt="Logo" className="logo-image" />
        <span className="logo-text">FASHION</span>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Navigation Links */}
      <div className={`nav-container ${isOpen ? "show-menu" : ""}`}>
        <nav className="nav-links">
          <a href="#" className="nav-item">
            CATALOGUE
          </a>
          <a href="#" className="nav-item">
            FASHION
          </a>
          <a href="#" className="nav-item">
            FAVOURITE
          </a>
          <a href="#" className="nav-item">
            LIFESTYLE
          </a>
        </nav>
        <button className="signup-btn">SIGN UP</button>

        {/* <div className="dropdown-icons">
        <a href="#" className="dropdown-item">
              <img src={FacebookImage} alt="" />
            </a>
            <a href="#" className="dropdown-item">
             <img src={InstagramImage} alt="" />
            </a>
            <a href="#" className="dropdown-item">
              <img src={TwitterImage} alt="" />
            </a>
            <a href="#" className="dropdown-item">
              <img src={LinkedinImage} alt="" />
            </a>
        </div> */}
      </div>
    </header>
  </div>
  )
}

export default Navbar
