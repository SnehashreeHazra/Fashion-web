import React from 'react'
import './Footer.css'
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'
import Linkedin from '../../assets/linkedin.png'

function Footer2() {
  return (
    <footer className='footer'>
         
      <div className="footer-section1">
        <h1 className="footer-logo">FASHION</h1>
        <p className="footer-description">
          Complete your style with awesome clothes from us.
        </p>
        <div className="footer-social">
          <a href="#" className="social-icon">
            <img src={Facebook} alt="Facebook icon" />
          </a>
          <a href="#" className="social-icon">
            <img src={Instagram} alt="Instagram icon" />
          </a>
          <a href="#" className="social-icon">
            <img src={Twitter} alt="Twitter icon" />
          </a>
          <a href="#" className="social-icon">
            <img src={Linkedin} alt="Linkedin icon" />
          </a>
        </div>
      </div>


       
       <div className="footer-section">
        <h3 className="footer-heading">Company</h3>
        <ul className="footer-links">
          <li><a href="#">About</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="footer-heading">Quick Link</h3>
        <ul className="footer-links">
          <li><a href="#">Share Location</a></li>
          <li><a href="#">Orders Tracking</a></li>
          <li><a href="#">Size Guide</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3 className="footer-heading">Legal</h3>
        <ul className="footer-links">
          <li><a href="#">Terms & conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer2
