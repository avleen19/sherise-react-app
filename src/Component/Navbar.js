import React from 'react'
import './Navbar.css'
export default function Navbar(props) {
  return (
    <div>
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
     
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item mx-2">
            <a className="nav-link active"  href="/">{props.about}</a>
          </li>
          <li className="nav-item  mx-2">
            <a className="nav-link active" href="/">{props.aim}</a>
          </li>
          <li className="nav-item  mx-2">
            <a className="nav-link active" href="/">{props.area}</a>
          </li>
          <li className="nav-item  mx-2">
            <a className="nav-link active" href="/" >{props.job}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
  )
}
