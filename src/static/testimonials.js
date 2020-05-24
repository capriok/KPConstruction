import React from 'react'

import stars from '../images/stars.png'

const Testimonials = () => {
  return (
    <>
      <h1>Testimonials</h1>
      <div className="testimonials-cont">
        <div>
          <header>
            <h3>Jim C.</h3>
            <p>Build or Replace a Deck or Non-Masonry Porch</p>
          </header>
          <section>
            <p>
              They were timely, professional and would recommend them to everyone.
              </p>
            <img src={stars} alt="" />
          </section>
        </div>
        <div>
          <header>
            <h3>Pam S.</h3>
            <p>Install or Replace an Aluminum or Steel Fence</p>
          </header>
          <section>
            <p>
              Very honest, hard working folks who take pride in their work and are
              perfectionists and talented. You can&#39;t go wrong! Plus, they are
              fantastic people who helped us when we moved to Bandon, had four boxers,
              and no way to contain them. They put up two separate fenced yards in a
              very short time!
              </p>
            <img src={stars} alt="" />
          </section>
        </div>
        <div>
          <header>
            <h3>Nancy</h3>
            <p>Grade or Reslope Grounds for Landscaping</p>
          </header>
          <section>
            <p>
              They were very professional and they did a good job.
              </p>
            <img src={stars} alt="" />
          </section>
        </div>
      </div>
    </>
  )
}

export default Testimonials
