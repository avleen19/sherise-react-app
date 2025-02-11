import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Maincard from './Component/Maincard'
import Ab from './Component/Ab'
import Inspire from './Component/Inspire'
import Nav from './Component/Nav'
import Orderplaced from './Component/Orderplaced'
import EmploymenthtmlForm from './Component/EmploymenthtmlForm';
import ThankYouPage from './Component/ThankYouPage';
import Donation from './Component/Donation'
import Health from './Component/Health'
import Women from './Component/Women'
import Education from './Component/Education'
import Nourish from './Component/Nourish'
import Box from './Component/Box'
import Footer from './Component/Footer'
import { Container } from './Component/Container'

export default function App() {
  return (
    <div>
    <Nav/>
      <Routes>
      <Route path='/home' element={<Box/>}/>
      <Route path='/about' element={<Ab/>}/>
      <Route path='/work' element={<Maincard/>}/>
      <Route path='/aim' element={<Inspire/>}/>
      <Route path='/donate' element={<Donation/>}/>
      <Route path='/orderplace' element={<Orderplaced/>}/>
      <Route path='/job' element={<EmploymenthtmlForm/>}/>
      <Route path="/thank-you" element={<ThankYouPage/>} />
      <Route path="/health" element={<Health/>} />
      <Route path="/women" element={<Women/>} />
      <Route path="/education" element={<Education/>} />
      <Route path="/nourish" element={<Nourish/>} />
      <Route path="/footer" element={<Footer/>}/>
      <Route path="/payment" element={<Container/>}/>
      </Routes>
      </div>
  )
}
