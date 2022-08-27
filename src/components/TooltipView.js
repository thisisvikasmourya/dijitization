import React from 'react'
import './TooltipView.css'

const TooltipView = () => {
  return (
    <div>
    <div className="tooltip-box">
    <header className="tooltip-header">
      <p>
      <i class="fa-solid fa-circle-exclamation fa"/>
      </p>
      <p>XYZ</p>
      <p><i class="fa-solid fa-xmark "></i></p>
    </header>
    <div className="tooltip-body">
    <div className="tooltip-text">
    <input type="text" className="text-box" placeholder="Description" value='This is a tooltip to help you accomplish a task'/>
    </div>
    <div className="tooltip-btn">
    <button className="btn ">Previous <i class="fa-solid fa-angles-left"></i></button>
    <button className="btn" style={{backgroundColor:'rgb(10, 25, 239)',color:'white',border:"none"}}>Next <i class="fa-solid fa-angles-right"></i></button>
    </div>
    </div>
    </div>

    <div className="section">
    <nav className='Navbar'>
    <div className="container">
    
    <div className='navbarleft'>
    <button className="nav-btn navbt2" ><i class="fa-solid fa-bullhorn"></i> Announcements</button>
    <button className="nav-btn navbt"><i class="fa-solid fa-vector-square"></i> Flow Manager</button>
    <button className="nav-btn navbt"><i class="fa-solid fa-eye"></i> Preview</button>
    </div>
    <div className="navbarRight">
    <button className="nav-btn1 navbt">Discard</button>
    <button className="nav-btn1 navbt">Continue</button>
    <button className="nav-btn1 navbt3">Save</button>
    <button className="nav-btn2 navbt2">Feedback</button>
    </div>
    </div>
    </nav>
    </div>
    </div>
  )
}

export default TooltipView