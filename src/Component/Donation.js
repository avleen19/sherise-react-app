import React, { useState } from 'react'
import './Donation.css'
import { useNavigate } from 'react-router-dom';
export default function Donation() {
 const [fn,setfn]=useState("");
 const [ln,setln]=useState("");
 const [em,setem]=useState("");
 const [am,setam]=useState(0);
  
 const navigate=useNavigate();

  return (
    <>
    <div>
      <div className="donation">
      <div className="contbox">
      <div className="title">Donation Information</div>
      <div className="fields">
       <input type="text" id="firstName" placeholder="First Name" onChange={(e)=>{setfn(e.target.value)}} value={fn}/> 
       <input type="text" id="lastName" placeholder="Last Name" onChange={(e)=>{setln(e.target.value)}} value={ln}/>
       <input type="text" id="email" placeholder="Email" onChange={(e)=>{setem(e.target.value)}} value={em}/>
       </div>
       <div className="amount">
       <div className="button">₹ 100</div>
       <div className="button">₹ 500</div>
       <div className="button">₹ 1000</div>
       <div className="button">₹ <input type="text" className="setamount" placeholder="" onChange={(e)=>{setam(e.target.value)}} value={am}/></div>
       </div>

       <div className="checkboxes">
       <input type="checkbox" id="reciept"/>
       <label for="reciept">Email me reciept</label>
       <br/>
       <br/>
       <input type="checkbox" id="anon"/>
       <label for="anon">Give Anonymously</label>
       <br/>
       <br/>
       
       <input type="checkbox" id="list"/>
       <label for="list">Add me to email list</label>
       <br/>
       <br/>
       
      </div>
      
        
      <div className="confirm">              
      </div>
      <button className='donate-button' id="donate-btn" onClick={()=>{navigate('/payment')}}>Donate Now</button>
      </div>
      </div>
    </div>
    </>
  )
}
