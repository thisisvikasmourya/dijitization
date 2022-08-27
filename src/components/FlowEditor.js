import React from 'react'
import './FlowEditor.css'

const FlowEditor = () => {
  return (
    <div>
    <div className="flow-editor-box">
    <div className="editor-header">
    <div className="text">
    <h4>Edit URL:</h4>
      <button className="btn">
      <i class="fa-solid fa-xmark "></i>
      </button>
    </div>
    </div>
    <div className="allinput">
    <div className="">
    <input type="text" className="text13 text1" placeholder="https://localhost:8080/foreground.html" />
    </div>
    <div className="editor-textarea text">
    <i class="fa-solid fa-triangle-exclamation fa"></i>
   <p>Match any single or multiple characters including / or match any word between / / </p>
    </div>
    <div className="editor-input">
    <input type="text" className="text13 text1" placeholder="https://localhost:8080/foreground.html" />
    </div>
    <div className="editor-input1">
    <input type="text" className="text1 text12" placeholder="Edit here..." />
    </div>
    </div>
    <div className="editor-match">
    <button className='btn1'>*Match Successful</button>
    </div>
    <div className="editor-checkbox">
    <button className="bt"><input type='checkbox' className='btt'  />Skipable</button>
    </div>
    <div className="btnn">
    <button className="btnnn">Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button className="btnnn" style={{backgroundColor:'#3742FA',color:'#FFFFFF',border:'none'}}>Save</button>
    </div>
    
    </div>
    
    </div>
  )
}

export default FlowEditor