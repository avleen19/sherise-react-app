import React from 'react'
import './Health.css'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer';

export default function Nourish() {
    const navigate=useNavigate();
  
  return (
    <>
    <div className='complbox'>
    <div className='mainbox'>
    <div className='inbox' id='four'>
    </div>
    <p id='hid'>NOURISH</p>
    </div>
    <div className='content'>
    <h1 className='descrip'>"Nourish girl child..."</h1>
    <p className='matter'>Nourish girls for better future and upcoming healthy generation.The responsiblity for women health reflects upon country's stability.It emphasizes the importance of providing proper nutrition, care, and support to girls during their formative years.Investing in  nutrition of girl children can break  cycle of poverty. Well-nourished girls are likely to grow healthy, productive adults who can contribute to their families and communities. By ensuring that girls receive proper nutrition, societies can unlock their full potential and create sustainable world for generations to come.</p>
    </div>
     <button className='don' onClick={()=>{navigate('/donate')}}>Donate</button>
    </div>
    <Footer/>
    </>
  )
}
