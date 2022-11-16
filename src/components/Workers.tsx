import React from 'react'
import img2 from '../styles/images/img2.jpg'
import img3 from '../styles/images/img3.jpg'
import img4 from '../styles/images/img4.jpg'
import img5 from '../styles/images/img5.jpg'

import '../styles/Workers.css'

function Workers() {
  return (
    <div className="workers" id="workers">
      <div className="container">
        <h2>Architects</h2>
        <div className="content">
          <div className="card">
            <img src={img2} alt="worker1" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quaerat voluptatem, eius voluptatibus incidunt architecto aut
              atque dolor non optio sapiente corporis animi consequatur unde?
              Explicabo atque totam suscipit eveniet!
            </p>
            <p>
              <span>John Smith</span>
            </p>
          </div>
          <div className="card">
            <img src={img3} alt="worker2" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              asperiores fuga, quis deserunt repellat praesentium omnis sapiente
              atque iure inventore numquam quos accusantium architecto
              perspiciatis assumenda dignissimos! Soluta, cum consectetur.
            </p>
            <p>
              <span>Diana Brown</span>
            </p>
          </div>
          <div className="card">
            <img src={img4} alt="worker3" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quaerat voluptatem, eius voluptatibus incidunt architecto aut
              atque dolor non optio sapiente corporis animi consequatur unde?
              Explicabo atque totam suscipit eveniet!
            </p>
            <p>
              <span>Lora Smith</span>
            </p>
          </div>
          <div className="card">
            <img src={img5} alt="worker4" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quaerat voluptatem, eius voluptatibus incidunt architecto aut
              atque dolor non optio sapiente corporis animi consequatur unde?
              Explicabo atque totam suscipit eveniet!
            </p>
            <p>
              <span>John Smith</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workers
