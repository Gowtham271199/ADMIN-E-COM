import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
    <img className='nav-logo' src={navlogo} alt='navlogo'></img>
    <img className='nav-profile' src={navProfile} alt='navprofile'></img>
    </div>
  )
}

export default Navbar