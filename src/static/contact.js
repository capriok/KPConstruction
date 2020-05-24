import React from 'react'

import fbIcon from '../images/fb-icon.png'
import igIcon from '../images/ig-icon.png'

const Contact = ({ inquiryState, setInquiryState }) => {
  return (
    <>
      <div className="contact-cont">
        <div className="personal">
          <h1>Personal Contact</h1>
          <div className="number">
            <p>(541) 551-5020</p>
          </div>
          <div className="email" onClick={() => setInquiryState({ ...inquiryState, open: true })}>
            <p>Send us an email</p>
          </div>
        </div>
        <div className="socials">
          <h1>Social Media</h1>
          <div className="icons">
            <a href="https://www.facebook.com/Keith-Phillingane-Construction-101436348048975/"
              target="_blank"
              rel="noopener noreferrer">
              <img src={fbIcon} alt="" />
            </a>
            <a href="https://www.instagram.com/keithphillinganeconstruction/"
              target="_blank"
              rel="noopener noreferrer">
              <img src={igIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
