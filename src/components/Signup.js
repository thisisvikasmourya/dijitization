import React from 'react'
import './Signup.css'
import logo from '../logo1.PNG';



export default function Signup() {
  return (
    <>
    <div className="form-box">
    <img className="logo" src={logo} />
  
    <div className="input1">
    <i class="fa-regular fa-envelope fa"></i>
    <input type="text" placeholder="Enter Email" name="email"/>  <br/>
    <div className="input2">
    <i class="fa-solid fa-lock fa"></i>
    <input type="text" placeholder="Enter Password" name="Password"/>
    </div>
    
    <div className='textinput'>
    <button className="btn">Login</button> &nbsp; &nbsp;
    <button className="btn-cancel">Cancel</button>
    </div>
    </div>
    
    <p className="textlogin">Already have an Account? <b>Log in</b></p>
    <div className="ortag">
    <hr width="25%" height=""/>
    <p>Or</p>
    <hr width="25%" height=""/>
    </div>
    <i class="fa-brands fa-google fa1"></i>
    <button className="btngoogle "><b>Continue with Google</b></button>
    
    </div>
    
    
    
    </>
  )
}
