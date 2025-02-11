import React from 'react'
import './About.css'
export default function About(props) {
  return (
    <div className='about'>
    <div className="card-con">
    <img id="ab-img" src={props.url} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.descr}</p>
    </div>
  </div>
    </div>
  )
}
