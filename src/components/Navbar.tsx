import React, { useState } from 'react'
import logo from '../styles/images/logo.jpg'
import '../styles/Navbar.css'

function Navbar() {
  const [click, setClick] = useState<boolean>(false)

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <div className="architect" onClick={handleClick}></div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About us</a>
          </li>
          <li className="nav-item">
            <a href="#workers">Architects</a>
          </li>
          <li className="nav-item">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
