import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
import logo from '../../assets/Logo.svg'

function navBar() {
  return (
    <header className='navigation'>
        <img src={logo} className='logo' alt='little-lemon'></img>
        <nav className='navigationBar'>
          <ul className='navigationLinks'>
            <li><Link to='/' className='links'>Home</Link></li>
            <li><Link to='/about' className='links'>About</Link></li>
            <li><Link to='/reservation' className='links'>Reservation</Link></li>
            <li><Link to='/menu' className='links'>Menu</Link></li>
            <li><Link to='/onlineOrder' className='links'>Online Order</Link></li>
            <li><Link to='/login' className='links'>Login</Link></li>
          </ul>
        </nav>
    </header>
  )
}

export default navBar
