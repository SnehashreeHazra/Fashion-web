import React from 'react'
import './Footer.css'
import amazon from './images/amazon.png'
import hm from './images/h&m.png'
import lacoste from './images/lacoste.png'
import levis from './images/levis.png'
import obey from './images/obey.png'
import shopify from './images/shopify.png'

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-brands">
        <img src={hm} alt="UNIQLO" className="brand-image" />
        <img src={amazon} alt="ZARA" className="brand-image" />
        <img src={obey} alt="H&M" className="brand-image" />
        <img src={shopify} alt="NIKE" className="brand-image" />
        <img src={levis} alt="ADIDAS" className="brand-image" />
        <img src={lacoste} alt="PUMA" className="brand-image" />
      </div>
    </footer>
  )
}

export default Footer
