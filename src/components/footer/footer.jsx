import React from 'react'
import logo from '../../assets/Asset 20@4x.png'
import { Link } from 'react-router-dom'
import './footer.css'

function footer() {
  return (
    <footer className='footerContainer'>
        <section className="footerContent">
            <article className='footerImage'>
                <img src={logo} alt='Little Lemon' ></img>
            </article>
            <nav className='footerNav'>
                <h3>Doormat Navigation</h3>
                <ul className='footerLinks'>
                    <li><Link to='/' className='footLinks'>Home</Link></li>
                    <li><Link to='/about' className='footLinks'>About</Link></li>
                    <li><Link to='/reservation' className='footLinks'>Reservation</Link></li>
                    <li><Link to='/onlineOrder' className='footLinks'>Online Order</Link></li>
                    <li><Link to='/login' className='footLinks'>Login</Link></li>
              </ul>
            </nav>
            <article className='address'>
                <h3>Contact</h3>
                <ul>
                    <li>Little Lemon 2745 <br/>Coastal AvenueSeabreeze, <br/>CA 90265 United States</li>
                    <li>+1 (555) 987-6543</li>
                    <li>littlelemon2745@gmail.com</li>
                </ul>
            </article>
            <article className='smLinks'>
                <h3>Social Media Links</h3>
                <ul>
                    <li>FaceBook</li>
                    <li>Instagram</li>
                    <li>X</li>
                </ul>
            </article>
        </section>
    </footer>
  )
}

export default footer
