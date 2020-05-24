import React from 'react';
import './App.scss';
import './Index.scss';

import Axios from 'axios'

import Intro from './static/intro'
import Services from './static/services'
import Contact from './static/contact'
import Gallery from './static/gallery'
import Footer from './static/footer'
import Testimonials from './static/testimonials'
import InquiryTransition from './components/inquiry-transition'
import Inquiry from './components/inquiry'
import Clickout from './components/clickout'

import logoWhiteCrop from './images/logo-white-cropped.png'

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
      <InquiryTransition inquiryState={inquiryState}>
        <Inquiry
          submitEmail={submitEmail}
          handleInquiryClose={handleInquiryClose}
          inquiryState={inquiryState}
          setInquiryState={setInquiryState}
          inquiryForm={inquiryForm}
          setInquiryForm={setInquiryForm}
          emailTest={emailTest} />
      </InquiryTransition>
      <Clickout
        inquiryState={inquiryState}
        handleInquiryClose={handleInquiryClose} />
      <header className="home-header">
        <h1>Keith Phillingane, LLC</h1>
        <img src={logoWhiteCrop} alt="" />
      </header>
      <main className="home-body">
        <section className="intro">
          <Intro />
        </section>
        <section className="contact">
          <Contact
            inquiryState={inquiryState}
            setInquiryState={setInquiryState} />
        </section>
        <section className="services">
          <Services />
        </section>
        <section className="gallery">
          <Gallery />
        </section>
        <section className="testimonials">
          <Testimonials />
        </section>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
