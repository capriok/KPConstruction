import React from 'react'
import { Transition } from 'react-spring/renderprops'

const InquiryTransition = ({ inquiryState, children }) => {
  return (
    <Transition
      items={inquiryState.open}
      from={{ zIndex: 500, position: 'fixed', top: -500 }}
      enter={{ zIndex: 500, position: 'fixed', top: 0 }}
      leave={{ zIndex: 500, position: 'fixed', top: -500 }}
      config={{ duration: 200 }}>
      {open => open && (props => <div style={props}>
        {children}
      </div>)}
    </Transition>
  )
}

export default InquiryTransition
