import React from 'react'

import introCover from '../images/intro-cover.jpg'
import introCoverMobile from '../images/intro-cover-mobile.jpg'
import logoWhiteCrop from '../images/logo-white-cropped.png'
import logoBlackBare from '../images/logo-black-bare.png'

const Intro = () => {
  return (
    <>
      <div className="intro-cont">
        <div className="intro-img">
          <img className="intro-logo" src={logoBlackBare} alt="" />
          <p className="ccb">CCB# 228117</p>
        </div>
        <div className="intro-body">
          <p>
            With over 30 years of experience, I take pride in quality craftsmanship.
            I am owner operated, and believe in building long-term relationships with
            my customers by delivering honesty along with exceptional work. I pride
            this company on reliability, great communication, integrity, and customer
            service. I'm an expert in this trade and will do my best to keep you as
            educated as I can on your particular project. I look forward to working with
            you! Road building, Road resurfacing, Road brushing for clearance, Land Clearing
            and leveling, Ditch repair, Culverts , Service trenching for power, water and
            septic, Hazard tree removal, Rock, sand and fill hauling, Demo work, Emergency
            water line digout, I service all of Coo's County. Bandon, Coo's Bay, Coquille, Mrytle Point,
            Langlois.
            </p>
        </div>
      </div>
      <img className="intro-cover" src={introCover} alt="" />
      <img className="intro-cover-mobile" src={introCoverMobile} alt="" />
    </>
  )
}

export default Intro