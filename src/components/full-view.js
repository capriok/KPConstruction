import React from 'react'
import useLockBodyScroll from '../hooks/lockbody'

import Clickout from './clickout'

const FullView = ({ state, close }) => {
  useLockBodyScroll()
  return (
    <>
      <div className="full-view">
        <img src={state.img} alt="" />
        <Clickout state={state} close={close} />
      </div>
    </>
  )
}

export default FullView
