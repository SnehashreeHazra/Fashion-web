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
        <img src={hm} alt="h&m" className="brand-image" />
        <img src={amazon} alt="Amazon" className="brand-image" />
        <img src={obey} alt="Obey" className="brand-image" />
        <img src={shopify} alt="Shopify" className="brand-image" />
        <img src={levis} alt="Levis" className="brand-image" />
        <img src={lacoste} alt="Lacoste" className="brand-image" />
      </div>
    </footer>
  )
}

export default Footer
