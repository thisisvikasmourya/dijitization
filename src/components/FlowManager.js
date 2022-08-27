import React from 'react'
import './FlowManager.css';


const FlowManager = () => {
  return (
    <div>
      <div className="SideNav">
      <div className="cross">
      <button className="btn">
      <i class="fa-solid fa-xmark "></i>
      </button>
      </div>
      <div className="inputbox">
      <i class="fa-solid fa-magnifying-glass fa"></i>
      <i class="fa-solid fa-caret-down fa1"></i>
      <input type="text" className=" text" placeholder="Search Flows"/>
      </div>
      <h3>Existing Flows</h3>
      <div className="inputbox">
      <input type="text" className=" text1" placeholder="Search Flows" value="XYZ_Flow_1"/>
      
      </div>
      </div>
    </div>
  )
}

export default FlowManager;
