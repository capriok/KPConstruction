import React from 'react'

import logoWhiteCrop from '../images/logo-white-cropped.png'

const Footer = () => {
  return (
    <>
      <main>
        <section>
          <img className="logo" src={logoWhiteCrop} alt="" />
        </section>
        <section className="licensing">
          <h3>State Licensing:</h3>
          <p>Trade: Residential General Contractor</p>
          <p>CCB License #: 228117</p>
          <p>Expiration: 10-22-2021</p>
        </section>
        <section>
          <h3>Personal Contact</h3>
          <p>(541) 551-5020</p>
          <p>keithphillingane@gmail.com</p>
        </section>
        <section>
          <h3>Social Media</h3>
          <p><a
            href="https://www.facebook.com/Keith-Phillingane-Construction-101436348048975/"
            target="_blank"
            rel="noopener noreferrer">
            Facebook
            </a></p>
          <p><a href="https://www.instagram.com/keithphillinganeconstruction/"
            target="_blank"
            rel="noopener noreferrer">
            Instagram
            </a></p>
        </section>
      </main>
      <p className="rights">© 2020 Keith Phillingane LLC. | All rights reserved</p>
    </>
  )
}

export default Footer
