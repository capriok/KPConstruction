import React from 'react'

import useLockBodyScroll from '../hooks/lockbody'

import close from '../images/close.png'

const Inquiry = ({
  submitEmail,
  handleInquiryClose,
  inquiryForm,
  setInquiryForm,
  inquiryState,
  emailTest
}) => {
  const isValid = emailTest()
  useLockBodyScroll();
  return (
    <>
      <div className="inquiry">
        <div className="close"><img src={close} alt="" onClick={() => { handleInquiryClose() }} /></div>
        <h1>Inquire</h1>
        {inquiryState.submitSent
          ? <div className="post-submit">
            <h1>{inquiryState.statusTitleMessage}</h1>
            <h1 className="sub">{inquiryState.statusSubMessage}</h1>
          </div>
          : <form onSubmit={(e) => { submitEmail(e) }}>
            <input type="text"
              placeholder="Enter Name (Required)"
              value={inquiryForm.name}
              onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
            />
            <input type="text"
              placeholder="Enter Email (Required)"
              value={inquiryForm.email}
              onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
            />
            <textarea type="text" rows="5"
              placeholder="Message Body (Required)"
              value={inquiryForm.body}
              onChange={(e) => setInquiryForm({ ...inquiryForm, body: e.target.value })}
            />
            <div className="select-opt">
              <p className="title"><span>How did you hear about us?</span><span>Optional</span></p>
              <select
                onChange={(e) => setInquiryForm({ ...inquiryForm, referral: e.target.value })}>
                <option value=""></option>
                <option value="Newspaper">Newspaper</option>
                <option value="Radio">Radio</option>
                <option value="Friend">Friend</option>
                <option value="Facebook">Facebook</option>
                <option value="Instagram">Instagram</option>
              </select>
            </div>
            <input
              type="submit"
              className="submit-btn"
              disabled={
                (inquiryState.submitLoading || !isValid || !inquiryForm.name || !inquiryForm.body)
                  ? true : false
              }></input>
          </form>
        }
      </div>
    </>
  )
}

export default Inquiry

