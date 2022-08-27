import React from 'react'
import './Tooltip.css';

const Tooltip = () => {
  return (
    <div>
      <div className="tooltip-box">
      <header className="tooltip-header">
        <p>
        <i class="fa-solid fa-circle-exclamation fa"/>
        </p>
        <p><b>Tooltip title </b></p>
        <p><i class="fa-solid fa-xmark "></i></p>
      </header>
      <div className="tooltip-body">
      <div className="tooltip-text">
      <input type="text" className="text-box" placeholder="Description"/>
      </div>
      <div className="tooltip-btn">
      <button className="btn">Cancel</button>
      <button className="btn" style={{backgroundColor:'rgb(10, 25, 239)',color:'white',border:"none"}}>Next <i class="fa-solid fa-angles-right"></i></button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Tooltip
