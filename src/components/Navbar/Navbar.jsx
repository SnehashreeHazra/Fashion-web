import React from 'react'
import "./Navbar.css"
import Logo from './images/logo.png'

function Navbar() {
  return (
    <div className="header-container">
      <header className="header">
        
        <div className="logo">
        <img src={Logo} alt="Logo" className="logo-image" />
        <span className="logo-text">FASHION</span>
        </div>

        
        <div className="nav-container">
          <nav className="nav-links">
            <a href="#" className="nav-item">CATALOGUE</a>
            <a href="#" className="nav-item">FASHION</a>
            <a href="#" className="nav-item">FAVOURITE</a>
            <a href="#" className="nav-item">LIFESTYLE</a>
          </nav>
        
          <button className="signup-btn">SIGN UP</button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
