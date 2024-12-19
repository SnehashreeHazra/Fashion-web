import React from 'react'
import './Voucher.css'
import AppleStoreImage from '../../assets/Apple-store-img.png'
import GooglePlayImage from '../../assets/google-store-img.png'
import phonePicture from '../../assets/Voucher-img.png'

function Voucher() {
  return (
    <section className="voucher">
    {/* Left Section */}
    <div className="voucher-left">
      <h1 className="voucher-title">DOWNLOAD APP & <br /> GET THE VOUCHER</h1>
      <p className="voucher-description">
        Get 30% off for first transaction using Rondovision mobile app for now.
      </p>
      <div className="small-images">
        <img src={AppleStoreImage} alt="Small Image 1" className="small-img" />
        <img src={GooglePlayImage} alt="Small Image 2" className="small-img" />
      </div>
    </div>

    {/* Right Section */}
    <div className="voucher-right">
      <img src={phonePicture} alt="Phone Picture" className="main-img" />
    </div>
  </section>
  )
}

export default Voucher
