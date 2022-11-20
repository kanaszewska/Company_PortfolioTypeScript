import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="contact">
        <h3>Contact</h3>
        <ul className="info">
          <li>
            <p>ul. Koszykowa 15</p>
          </li>
          <li>
            <p>03-673 Warsaw</p>
          </li>
          <li>
            <p>+48(22)-134-34-63</p>
          </li>
          <li>
            <p>company@gmail.com</p>
          </li>
        </ul>
      </div>
      <div className="containerFooter">
        <div className="facebook">
          <FaFacebook />
        </div>
        <div className="instagram">
          <FaInstagram />
        </div>
        <div className="pinterest">
          <FaPinterest />
        </div>
      </div>
    </div>
  )
}

export default Footer
