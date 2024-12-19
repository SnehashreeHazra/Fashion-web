import React from 'react'
import './Community.css'

function Community() {
  return (
    <section className="community-section">
      {/* Text Section */}
      <div className="text">
        <h1 className="title">JOIN SHOPPING COMMUNITY TO <br /> GET MONTHLY PROMO</h1>
        <p className="description">
          Type your email down below and be young wild generation
        </p>
      </div>

      {/* Email Subscription Section */}
      <div className="form">
      <div className="input-container">
          <input
            type="email"
            placeholder="Add your email here"
            className="subscribe-input"
          />
          <button className="subscribe-button">SEND</button>
        </div>
      </div>
    </section>
  )
}

export default Community
