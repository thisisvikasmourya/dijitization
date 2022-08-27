import React from 'react'
import './Popup.css';

const Popup = () => {
  return (
    <div>
    <div className="popup-box">
    <div className="popup-para">
    <i class="fa-solid fa-circle-exclamation fa"></i> &nbsp;Tooltip appears to be on different pages proceed
    </div><br/>
    <div className="popup-btn">
    <button className="btn-btn " style={{float: 'right',backgroundColor:'rgb(10, 25, 239)',color:'white'}}>Ok</button>
    <button className="btn-btn" style={{border:"1px solid #2b2e4a"}}>Cancel</button>
    </div>
    </div>
    <nav className='Navbar'>
    <div className="container">
    <button className="btn-logout" style={{float: 'left'}}><i class="fa-solid fa-right-from-bracket"></i>&nbsp;logout</button>&nbsp; &nbsp;&nbsp; &nbsp;
    <button className="btn-logout btn-flow" style={{float: 'left'}}><i class="fa-solid fa-vector-square"></i>&nbsp;FLow Manager</button> 
    <button className="btn-logout btn-flow" style={{float: 'left'}}><i class="fa-solid fa-square"></i>&nbsp;Dashboard</button>
    <button className="btn-logout" style={{float: 'right',backgroundColor:'rgb(10, 25, 239)',color:'white',marginRight:'40px' ,border:'none'}}>Create Flow</button> 
    </div>
    </nav>
    </div>
  )
}

export default Popup