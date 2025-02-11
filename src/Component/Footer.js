import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Footer.css'
export default function Footer() {
  const navigate=useNavigate();
  return (
    <footer className="footer">
      {/* First container */}
      <div className="con" id='firstcon'>
        <h3 id='logoname'>SheRise</h3>
        <h5 className='vis'>Our vision</h5>
        <p>Our vision is to build a society where women and girls are empowered to lead lives of dignity and equality. We envision a world where every woman and girl has the power to make choices, voice her opinions, and participate fully in all aspects of society.</p>
        <p>We believe in a future where women are no longer limited by social and economic sphere where they have access to education and economic opportunities.We envision a society where women are leaders, decision-makers, and agents of change, contributing to development of the world.</p>
      </div>

      {/* Second container */}
      <div className="con" id='contwo'>
        <h3>Contact Us</h3>
        <p>Send an email</p>
        <p>SheRise@gmail.com</p>
        <p>Phone no:</p>
        <p>0123 &nbsp; 4567 &nbsp; 8910</p>
        <button className='footbut' onClick={()=>navigate('/donate')}>Donate</button>
       
      </div>

      {/* Third container */}
      <div className="con" >
        <h3>Navigation links</h3>
        <p className='paralink' onClick={()=>navigate('/about')}>About</p>
        <p className='paralink' onClick={()=>navigate('/aim')}>Aim</p>
        <p className='paralink' onClick={()=>navigate('/work')}>work areas</p>
        <p className='paralink' onClick={()=>navigate('/donate')}>Donate</p>
        <p className='paralink' onClick={()=>navigate('/job')}>Employment</p>
        
      </div>
    </footer>
  )
}
