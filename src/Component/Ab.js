import React from 'react'
import About from './About'
import AboutMatter from './AboutMatter'
import './Ab.css'
export default function Ab() {
  return (
    <div>
    <AboutMatter/>
    <h1 id="head">OUR CORE VALUES</h1>
    <div className="row my-4 mx-4">
    <div className="col md-3">
    <About url="https://www.careindia.org/wp-content/themes/careindia/images/aboutUs/respect-icon.svg" title="RESPECT" descr="Valuing the dignity, diversity, and perspectives of all individuals, fostering an inclusive and supportive community."/>
    </div>
    <div className="col md-3">
    <About url="https://www.careindia.org/wp-content/themes/careindia/images/aboutUs/integrity-icon.svg" title="INTEGRITY" descr="Guided by unwavering moral principles, ensuring transparency and honesty in all endeavors."/>
    </div>
    <div className="col md-3">
    <About url="https://www.careindia.org/wp-content/themes/careindia/images/aboutUs/commitment-icon.svg" title="COMMITEMENT" descr="Devoted to our mission with steadfast determination, resilience, and dedication."/>
    </div>
    </div>
    <div className="row my-3 mx-4">
    <div className="col md-3">
    <About url="https://www.careindia.org/wp-content/themes/careindia/images/aboutUs/excellence-icon.svg" title="EXELLENCE" descr="Striving for the highest standards of quality and performance, driven by a commitment to continuous improvement."/>
    </div>
    </div>
    </div>
  )
}
