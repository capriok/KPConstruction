import React from 'react'

const Clickout = ({ inquiryState, handleInquiryClose }) => {
  return (
    <>
      {inquiryState.open && <div className="clickout" onClick={() => handleInquiryClose()}></div>}
    </>
  )
}

export default Clickout
