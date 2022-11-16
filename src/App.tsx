import React from 'react'
import About from './components/About'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Workers from './components/Workers'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'

import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Workers />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
