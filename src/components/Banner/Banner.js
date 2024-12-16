import React from 'react'
import './Banner.css'
import bannerImage from './images/banner-image.png'

function Banner() {
  return (
    <div className='big-container'>
<div className="banner-container">
      <div className="banner-content ">
      <div className="banner-title">
        <div className="text-block white-bg black-text">LET’S</div><br />
        <div className="text-block black-text">EXPLORE</div><br />
        <div className="text-block yellow-bg black-text">UNIQUE</div><br />
        <div className="text-block black-text">CLOTHES.</div>
      </div>
        <p className="banner-description">
        Live for Influential and Innovative fashion!
        </p>
        <button className="banner-button">Shop Now</button>
      </div>
      <div className="banner-image">
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
    </div>
    
  )
}

export default Banner
