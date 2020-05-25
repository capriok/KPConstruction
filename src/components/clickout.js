import React from 'react'

const Clickout = ({ state, close }) => {
  return (
    <>
      {state.open && <div className="clickout" onClick={() => close()}></div>}
    </>
  )
}

export default Clickout
