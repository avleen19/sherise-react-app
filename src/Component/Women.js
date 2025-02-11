import React from 'react'
import './Women.css'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
export default function Women() {
  const navigate=useNavigate();
  return (
    <>
    <div className='complbox'>
    <div className='mainbox'>
    <div className='inbox' id='two'>
    </div>
    <p id='hid'>EQUALITY</p>
    </div>
    <div className='content'>
    <h1 className='descrip'>"Women Empowerment"...</h1>
    <p className='matter'>A woman with a voice is, by definition, a strong woman.Education, training, awareness raising, building self-confidence, to transform the structures that reinforce gender inequality.Enabling women to have control over their lives, achieve their aspirations, and participate fully in society as equals.women empowerment is not only a matter of human rights but also essential for achieving gender equality, social justice, and sustainable development. By empowering women, we can create a more equitable, inclusive, and prosperous world for everyone.</p>
    </div>
     <button className='don' onClick={()=>{navigate('/donate')}}>Donate</button>
    </div>
    <Footer/>
    </>
  )
}
