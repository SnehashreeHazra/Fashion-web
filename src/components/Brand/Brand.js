import React from 'react'
import './Brand.css'
import amazon from './images/amazon.png'
import hm from './images/h&m.png'
import lacoste from './images/lacoste.png'
import levis from './images/levis.png'
import obey from './images/obey.png'
import shopify from './images/shopify.png'

function Footer() {
  return (
    <div className="brand-container">
      <div className="brands">
        <img src={hm} alt="h&m" className="brand-image" />
        <img src={obey} alt="Amazon" className="brand-image" />
        <img src={shopify} alt="Obey" className="brand-image" />
        <img src={lacoste} alt="Shopify" className="brand-image" />
        <img src={levis} alt="Levis" className="brand-image" />
        <img src={amazon} alt="Lacoste" className="brand-image" />
      </div>
    </div>
  )
}

export default Footer
