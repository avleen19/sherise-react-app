import React from 'react'
import './Box.css'
import Containbox from './Containbox'
import Ab from './Ab'
import Inspire from './Inspire'
import Maincard from './Maincard'
import Donation from './Donation'
import EmploymenthtmlForm from './EmploymenthtmlForm'
import Footer from './Footer'
export default function Box() {
  return (
    <div>
      <div className="conbox">
       <div className="inner">
       <Containbox/>
       </div>
      </div>
      <Ab/>
      <Inspire/>
      <Maincard/>
      <Donation/>
      <EmploymenthtmlForm/>
      <Footer/>
    </div>
  )
}
