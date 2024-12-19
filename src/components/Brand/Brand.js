import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Brand.css'
import amazon from './images/amazon.png'
import hm from './images/h&m.png'
import lacoste from './images/lacoste.png'
import levis from './images/levis.png'
import obey from './images/obey.png'
import shopify from './images/shopify.png'

function Brand() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="brand-container">
   
      <div className="brands">

      <Slider {...settings}>

        <div>
          <img src={hm} alt="h&m" className="brand-image" />
        </div>
        <div>
          <img src={obey} alt="Amazon" className="brand-image" />
        </div>
        <div>
          <img src={shopify} alt="Obey" className="brand-image" />
        </div>
        <div>
          <img src={lacoste} alt="Shopify" className="brand-image" />
        </div>
        <div>
          <img src={levis} alt="Levis" className="brand-image" />
        </div>
        <div>
          <img src={amazon} alt="Lacoste" className="brand-image" />
        </div>

        </Slider>

      </div>
      
    </div>
  )
}

export default Brand
