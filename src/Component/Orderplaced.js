import React from 'react'
import './order.css'
import { useNavigate } from 'react-router-dom'
export default function Orderplaced() {
  const navigate=useNavigate();
  return (
    <div>
    <div className='orderbox'>
      Transaction successful.Thanks for your visit !
      <br/>
      <button className='gotbtn' onClick={()=>{navigate('/donate')}}>Go back</button>
      </div>
    </div>
  )
}
