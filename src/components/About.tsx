import React from 'react'
import '../styles/About.css'
import img1 from '../styles/images/img1.jpg'

function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <img src={img1} alt="john" />
        <div className="info">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel
            quam pariatur quaerat dignissimos culpa, dolor voluptatibus in,
            odit, eveniet suscipit sint accusamus voluptas hic quo repellat
            molestiae soluta! Ab! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Sit excepturi, quibusdam rerum doloremque ullam,
            pariatur iure ut non voluptas, nam sequi suscipit! Perspiciatis
            iusto libero alias ex, nemo error. Asperiores.
          </p>
          <button className="button">Find out more</button>
        </div>
      </div>
    </div>
  )
}

export default About
