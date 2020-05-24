import React from 'react';
import './App.scss';
import './Index.scss';

import { Transition } from 'react-spring/renderprops'
import Axios from 'axios'

import Inquiry from './inquiry'

import introCover from './images/intro-cover.jpg'
import introCoverMobile from './images/intro-cover-mobile.jpg'
import logoBlack from './images/logo-black.png'
import logoWhite from './images/logo-white.png'
import fbIcon from './images/fb-icon.png'
import igIcon from './images/ig-icon.png'
import stars from './images/stars.png'

function App() {
  const [inquiryState, setInquiryState] = React.useState({
    open: false,
    submitLoading: false,
    submitSent: false,
    statusTitleMessage: '',
    statusSubMessage: ''
  })
  const [inquiryForm, setInquiryForm] = React.useState({
    name: '',
    email: '',
    body: '',
    referral: ''
  })

  const emailTest = () => {
    const emailRegex = new RegExp(/\S+@\S+\.\S+/)
    let test = emailRegex.test(inquiryForm.email)
    return test
  }

  const submitEmail = async (e) => {
    e.preventDefault()
    let isValid = emailTest()
    if (!inquiryForm.name, !inquiryForm.email, !inquiryForm.body) return
    if (!isValid) return
    setInquiryState({ ...inquiryState, submitLoading: true })
    Axios.post(process.env.REACT_APP_POST + '/send', inquiryForm)
      .then(res => {
        console.log(res)
        setInquiryState({
          ...inquiryState,
          submitSent: true,
          statusTitleMessage: 'Successfully Sent',
          statusSubMessage: 'Thank you'
        })
      })
      .catch(err => {
        console.log(err)
        setInquiryState({
          ...inquiryState,
          submitSent: true,
          statusTitleMessage: 'Something went wrong',
          statusSubMessage: 'Email us directly at dawnhall21@gmail.com'
        })
      })
  }

  const handleInquiryClose = () => {
    setInquiryState({
      ...inquiryState,
      open: false,
    })
    setTimeout(() => {
      setInquiryState(() => ({
        open: false,
        submitLoading: false,
        submitSent: false,
        statusTitleMessage: '',
        statusSubMessage: ''
      }))
      setInquiryForm({
        name: '',
        email: '',
        body: '',
        referral: ''
      })
    }, 500);
  }

  return (
    <div className="Home">
      <header className="home-header">
        <h1>Keith Phillingane, LLC</h1>
        <img src={logoWhite} alt="" />
      </header>
      <Transition
        items={inquiryState.open}
        from={{ zIndex: 500, position: 'fixed', top: -500 }}
        enter={{ zIndex: 500, position: 'fixed', top: 0 }}
        leave={{ zIndex: 500, position: 'fixed', top: -500 }}
        config={{ duration: 200 }}>
        {open => open && (props => <div style={props}>
          <Inquiry
            submitEmail={submitEmail}
            handleInquiryClose={handleInquiryClose}
            inquiryState={inquiryState}
            setInquiryState={setInquiryState}
            inquiryForm={inquiryForm}
            setInquiryForm={setInquiryForm}
            emailTest={emailTest} />
        </div>)}
      </Transition>
      {inquiryState.open && <div className="clickout" onClick={() => handleInquiryClose()}></div>}
      <main className="home-body">
        <section className="intro">
          <div className="intro-cont">
            <div className="intro-img">
              <img src={logoBlack} alt="" />
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
          </div>
          <img className="intro-cover" src={introCover} alt="" />
          <img className="intro-cover-mobile" src={introCoverMobile} alt="" />
        </section>
        <section className="in-touch">
          <div className="in-touch-cont">
            <div className="contact">
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
        </section>
        <section className="services">
          <div className="services-cont">
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
            </div>
            <div className="two">
              <h1>Area of Expertise</h1>
              <li>Excavation</li>
              <li>Trenching</li>
              <li>Road/Driveway Grading</li>
              <li>Carpentry</li>
              <h1>Quick Facts</h1>
              <h3 className="inline">Business Hours: <p className="inline-p">Call to confirm</p></h3>
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
          </div>
        </section>
        <section className="gallery">
          <div className="gallery-cont">
          </div>
        </section>
        <section className="testimonials">
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
        </section>
      </main>
      <footer className="home-footer"><p>© 2020 Keith Phillingane LLC. | All rights reserved.</p></footer>
    </div>
  );
}

export default App;
