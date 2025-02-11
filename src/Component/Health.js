import React from 'react'
import './Health.css'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';
export default function Health() {
  const  navigate=useNavigate();
  return (
    <>
    <div className='complbox'>
    <div className='mainbox'>
    <div className='inbox'>
    </div>
    <p id='hid'>HEALTH</p>
    </div>
    <div className='content'>
    
    <h1 className='descrip'> "Healthy mothers,healthy future"...</h1>
    <p className='matter'>A healthy pregnancy provides the mother's well-being and lays the foundation for a healthy future for the child. It emphasizes the critical role of maternal health in shaping the future of individuals, families, and communities, highlighting the need for comprehensive support and investment in maternal care. Improving maternal health requires addressing underlying issues such as poverty, gender inequality, access to education, and healthcare infrastructure.By prioritizing the health of mothers, societies can break the cycle of poverty, improve child health and development.</p>
    </div>
     <button className='don' onClick={()=>{navigate('/donate')}}>Donate</button>
    </div>
    <Footer/>
    </>
  )
}
