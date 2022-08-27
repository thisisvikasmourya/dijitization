import React from 'react'
import './UiTooltip.css';

const UiTooltip = () => {
  return (
    <div>
    <div className="tooltip-box">
    <header className="tooltip-header">
      <p>
      <i class="fa-solid fa-circle-exclamation "/>
      </p>
      <p><b>Click</b></p>
      <p><i class="fa-solid fa-xmark "></i></p>
    </header>
    <div className="tooltip-body">
    <div className="tooltip-text">
    <input type="text" className="text-box" placeholder="Click"/>
    </div>
    <div className="tooltip-btn">
    <button className="btn " >* Please click on the target to proceed</button>
    </div>
    </div>
    </div>

    </div>
  )
}

export default UiTooltip
