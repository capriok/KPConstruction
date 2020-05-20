import React from 'react';
import './App.scss';
import './Index.scss';

import logoJPG from './images/logo.jpg'
import logoPNG from './images/logo.png'
import fbIcon from './images/fb-icon.png'
import igIcon from './images/ig-icon.png'

function App() {
  return (
    <div className="Home">
      <headerer className="home-header"><h1>Keith Phillingane, LLC</h1></headerer>
      <body className="home-body">
        <section className="intro">
          <div className="intro-img">
            <img src={logoPNG} alt="" />
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
              water line digout, I service all of Coo's County. Bandon, Coo's Bay, Mrytle Point,
              Langlois, Port Orford.
            </p>
          </div>
        </section>
        <section className="in-touch">
          <div className="contact">
            <div className="number">
              <p>(541) 551-5020</p>
            </div>
            <div className="address">
              <p>58688 Seven Devils Road</p>
              <p>Bandon, OR 97411</p>
            </div>
          </div>
          <div className="socials">
            <h2>Social Media</h2>
            <div className="icons">
              <a href="https://www.facebook.com/Keith-Phillingane-Construction-101436348048975/">
                <img src={fbIcon} alt="" />
              </a>
              <a href="https://www.instagram.com/keithphillinganeconstruction/">
                <img src={igIcon} alt="" />
              </a>
            </div>
          </div>
        </section>
        <section className="services">
          <div className="one">
            <h1>Service Area</h1>
            <li>Myrtle Point</li>
            <li>Brandon</li>
            <h1>Services Offered</h1>
            <h3>Decks</h3>
            <li>Deck or porch build/replace</li>
            <h3>Excavation</h3>
            <li>Major Grading or Resloping</li>
            <li>Site Preparation</li>
            <h3>Landscaping</h3>
            <li>Minor Grading or Resloping</li>
            <h3>Paving</h3>
            <li>Garvel of Loose Fill Paving Install</li>
            <h3>Tree Service</h3>
            <li>Tree Stump Removal</li>
            <h1>Area of Expertise</h1>
            <li>Excavation</li>
            <li>Trenching</li>
            <li>Road/Driveway Grading</li>
            <li>Carpentry</li>
          </div>
          <div className="two">
            <h1>Quick Facts</h1>
            <h3>Business Hours</h3>
            <p>(Call to confirm)</p>
            <li>Commerical</li>
            <li>Free Estimates</li>
            <li>Residential</li>
            <h1>Credentials</h1>
            <h3>In Business Since: 2019</h3>
            <h3>State Licensing:</h3>
            <p>Trade: RGC - Residential General Contractor</p>
            <p>License #: 228117</p>
            <p>Expiration: 10-22-2021</p>
          </div>
        </section>
        <section className="gallery"></section>
        <section className="testimonials">
          <div>
            <header>
              <h3>Jim C.</h3>
              <p>Build or Replace a Deck or Non-Masonry Porch</p>
            </header>
            <body>
              <p>
                They were timely, professional and would recommend them to everyone.
              </p>
            </body>
          </div>
          <div>
            <header>
              <h3>Pam S.</h3>
              <p>Install or Replace an Aluminum or Steel Fence</p>
            </header>
            <body>
              <p>
                Very honest, hard working folks who take pride in their work and are
                perfectionists and talented. You can&#39;t go wrong! Plus, they are
                fantastic people who helped us when we moved to Bandon, had four boxers,
                and no way to contain them. They put up two separate fenced yards in a
                very short time!
              </p>
            </body>
          </div>
          <div>
            <header>
              <h3>Nancy</h3>
              <p>Grade or Reslope Grounds for Landscaping</p>
            </header>
            <body>
              <p>
                They were very professional and they did a good job.
              </p>
            </body>
          </div>
        </section>
      </body>
      <footer className="home-footer"><p>© 2020 KP Constrcution | All rights reserved.</p></footer>
    </div>
  );
}

export default App;
