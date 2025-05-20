import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../../assets/restauranfood.jpg'
import Specials from './specials/specials'
import Testimonial from '../testimonial/testimonial'
import Footer from '../footer/footer'
import './home.css'

function Home() {

  const navigate = useNavigate()

  function handleClick(){
    navigate('/reservation')
  }

  return (
   <main className='homeContainer'>
    <section className='highlights'>
        <div className="homeLeft">
          <div className="title">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
          </div>
          <p className='subTitle'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Placeat dolore illum esse necessitatibus magni aliquam fuga, est rerum quae ipsum?
          </p>
          <button className='bookBtn' onClick={handleClick}>Reserve a Table</button>
        </div>
        <div className="homeRight">
          <img src={img} alt='' className='homeImg'></img>
        </div>
    </section>

    <Specials />
    <Testimonial />
    <Footer/>
   </main>
  )
}

export default Home
