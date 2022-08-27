import React from 'react'
import './CreateFlow.css'
import logo from '../logo1.PNG';

export default function CreateFlow()  {
  return (
    <>
    <div className="form-box">
    <img className="logo" src={logo} />
  
  <p className="title1">CREATE FLOW</p>
    <div className="input1">
    <i class="fa-solid fa-vector-square fa"></i>
    <input type="text" placeholder="Application name" name="email"/>  <br/>
    <i class="fa-solid fa-lock fa"></i>
    <input type="text" placeholder="Flow use case" name="Password"/>
    
    <div className='textinput'>
    <button className="btn-cancel">Cancel</button>&nbsp; &nbsp;
    <button className="btn">Add</button> 
    </div>
    </div>
    
    </div>
    <nav className='Navbar'>
    <div className="container">
    <button className="btn-logout" style={{float: 'left'}}><i class="fa-solid fa-right-from-bracket"/>&nbsp;logout</button>&nbsp; &nbsp;&nbsp; &nbsp;
    &nbsp;<button className="btn-logout btn-flow" style={{float: 'left'}}><i class="fa-solid fa-vector-square"></i>&nbsp;FLow Manager</button>
    <button className="btn-logout" style={{float: 'right',backgroundColor:'rgb(10, 25, 239)',color:'white',marginRight:'40px',border:"none"}}>Create Flow</button> 
    </div>
    
    </nav>
    
    
    </>
  )
}
