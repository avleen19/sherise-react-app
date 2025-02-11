import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
export default function Nav() {
  return (
    <nav className='nav'>
    <img id='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSspK79QiIonpbuLg_P-rsOeJFs2jmBCrPzZJu2LlRklOYTPYQrqQDn2DbnJi8cXN6pUuE&usqp=CAU' alt='no-img' />
    <Link  className='link' to='/home'>HOME</Link>
    <Link  className='link' to='/about'>ABOUT</Link>
    <Link  className='link' to='/aim'>AIM</Link>
    <Link className='link' to='/work'>FOCUS AREAS</Link>
    <Link  className='link' to='/donate'>DONATE</Link>
    <Link  className='link' to='/job'>EMPLOYMENT</Link>
    <Link  className='link' to='/payment'>PAYMENT</Link>
    
    </nav>
  )
}
