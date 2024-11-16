import React from 'react'
import './Navbar.css'
import logo from '../.s./images/logo.jpg'

const Navbar = () => {
  return (
    <nav>
        <img src={logo} alt="printing" />
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li>Contact us</li>
        </ul>
    </nav>
  )
}

export default Navbar