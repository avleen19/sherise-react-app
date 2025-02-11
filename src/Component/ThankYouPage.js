import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Thank.css'
function ThankYouPage() {
    const navigate=useNavigate();
  
  return (
    <div>
    <div className='thankbox'>
      Thanks for your response!.We will contact you soon.
      <br/>
      <button className='gotbtn' onClick={()=>{navigate('/job')}}>Go back</button>
      </div>
    </div>
  )
}

export default ThankYouPage