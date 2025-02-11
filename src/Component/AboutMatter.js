import React from 'react'
import './AboutMatter.css'
import { Link } from 'react-router-dom'
export default function AboutMatter() {
  return (
    <div>
    <div className='abt'>ABOUT US</div>
    <div className="cont">
      <div className="box">
      <div>
      <h2>"Unlocking Potential, Building Futures: SheRise for Girls."</h2>
        <p id="about-para">SheRise's flagship project, 'GirlStars,' aims to provide holistic education and skill-building opportunities to girls across India, equipping them with the tools they need to thrive in their communities.At SheRise, we're launching 'Project Saksham' to promote digital literacy and entrepreneurship among young girls, enabling them to harness the power of technology to create sustainable livelihoods.</p>
      <Link  className='donate' to='/donate'>DONATE</Link>
      </div>
      </div>
      </div>
    </div>
  )
}
