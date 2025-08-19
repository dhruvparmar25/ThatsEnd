import React from 'react'
import './index.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <div className='w-100% h-screen text-white'>
      <Navbar/>
      <LandingPage/>
    </div>
  )
}

export default App