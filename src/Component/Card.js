import React from 'react'
import './card.css'
export default function Card(props) {
  return (
    <div className='outer'>
    <div className="card">
    <img src={props.imgUrl} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
      <p className="card-text">{props.descr}</p>
    </div>
  </div>
  </div>
  )
}
