import React from 'react'
import './Health.css'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
  
export default function Education() {
    const  navigate=useNavigate();

  return (
    <>
    <div className='complbox'>
    <div className='mainbox'>
    <div className='inbox' id='three'>
    </div>
    <p id='hid'>EDUCATION</p>
    </div>
    <div className='content'>
    
    <h1 className='descrip'>"Girl Education..."</h1>
    <p className='matter'>There is no greater pillar of stability than a strong and educated woman.Your gender shouldnot determine whether you get education.Educated girls are also more likely to invest in their children's education, creating a cycle of intergenerational poverty reduction. Education empowers girls to become agents of change in their communities and contribute to the advancement of gender equality.By ensuring that girls have access to quality education, societies can unlock their full potential and create a more equitable, prosperous, and sustainable world for all. </p>
    </div>
     <button className='don' onClick={()=>{navigate('/donate')}}>Donate</button>
    </div>
    <Footer/>
    </>
  )
}
