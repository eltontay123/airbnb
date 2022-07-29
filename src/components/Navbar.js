import React from 'react'
import Logo from '../images/Vector.png'
import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <img className='logo' src={Logo} alt='Airbnb Logo'/>
    </nav>
  )
}
