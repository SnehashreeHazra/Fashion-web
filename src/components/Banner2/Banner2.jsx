import React from 'react'
import './Banner2.css'
import Image from '../../assets/banner2-img.png'


function Banner2() {
  return (
    <div className="sale-banner">
      <div className="sale-banner-container">
        
        <div className="sale-banner-image">
          <img
            src={Image} 
            alt="Payday Sale"
          />
        </div>

        <div className="sale-banner-content">
        <h1 className="sale-tag">
            <div className="highlight">
              <span>PAYDAY</span>
            </div>
            SALE NOW
          </h1>
          <p className="sale-text">
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <p className="sale-date">
            <strong>1 June - 10 June 2021</strong>
          </p>
          <p className="terms">*Terms & Conditions apply</p>
          <button className="shop-now-btn">SHOP NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Banner2
