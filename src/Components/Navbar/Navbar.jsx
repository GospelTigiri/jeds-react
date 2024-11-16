import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll'
import logo from '../images/images/logo.jpg'
import menu_icon from '../images/images/menu-icon.png'

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
        window.scrollY > 500 ? setSticky(true) : setSticky(false);
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="logo" />
        <ul className={mobileMenu?'':'hide-mobile-menu'}>
            <li><Link to='carousel-item' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='native' smooth={true} offset={-260} duration={500}>Design</Link></li>
            <li><Link to='about'  smooth={true} offset={-150} duration={500}>About Us</Link></li>
            <li><Link to='gallery' smooth={true} offset={-260} duration={500}>Gallery</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='mybtn'>Contact Us</Link></li>
        </ul>
        <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar