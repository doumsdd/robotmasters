import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/NavbarSection'
import './App.css'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <Router>
        <Navbar />
        <HeroSection />
    </Router>
  )
}

export default App;
