import React, { useState } from 'react'
import './Motivation.css'
export default function Motivation(props) {
    const[displaytext,setdisplaytext]=useState("false");
    
    const handler=()=>{
        setdisplaytext(!displaytext);
    }

  return (
    <div id="out">
      <div className={props.color} >
      <div className="image">
      <img   src={props.url} alt="no-img"/>
      </div>
      <div className="text">
      <p id={props.id}>{props.title}</p>
      </div>
      <button id="mot-but" onClick={handler}>Read more</button>
      <div className='hidden'>
      {
        displaytext?(<p style={{display:'inline'}}>{props.descr}</p>):<p style={{display:'none'}}></p>
      }
      </div>
    </div>
  </div>
  )
}
