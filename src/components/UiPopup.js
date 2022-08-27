import React from 'react'
import './UiPopup.css'

const UiPopup = () => {
  return (
    <div>
    <div className="ui-box">
    <div className="ui-title">
    <p>Title</p>
    <i class="fa-solid fa-xmark "></i>
    </div>
    <div className="ui-des">
    <input  type="text" className="textbox" placeholder="Description"/>
    <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="opel">Opel</option>
    <option value="audi">Audi</option>
  </select>
  <div class="btnbtn">
  <button className="btn btn"  style={{backgroundColor:'#3742FA',color:'#FFFFFF'}}>Done</button>
  <button className="btn btn"  style={{border:'1px solid #2b2e4a',backgroundColor:'#fff'}}>Next <i class="fa-solid fa-angles-right"></i></button>
  </div>
    </div>
    </div>
    
    </div>
  )
}

export default UiPopup