import React from 'react'
import { useNavigate } from 'react-router-dom'
import greekSalad from '../../../assets/greek_salad.jpg'
import bruschetta from '../../../assets/bruchetta.svg'
import lemonDessert from '../../../assets/lemon_dessert.jpg'
import './specials.css'

function specials() {

  const  navigate = useNavigate()

  function handleClick(){
    navigate('/menu')
  }

  return (
    <section className='specials'>
      <article className="head">
        <h1>Specials</h1>
        <button className='specialsBtn' onClick={handleClick}>Online Menu</button>
      </article>
      <article className="specialsContent">
        <div className="card">
          <img src={greekSalad} className='foodImg'></img>
          <div className="foodHead">
            <h3>Green Salad</h3>
            <p>$12.99</p>
          </div>
          <p>
            The famous greek salad of crispy lettuce, peppers, 
            olives and our Chicago style feta cheese, garnished 
            with crunchy garlic and rosemary croutons. 
          </p>
          <button className='orderBtn'>Order a delivery</button>
        </div>
        
        <div className="card">
          <img src={bruschetta} className='foodImg'></img>
          <div className="foodHead">
            <h3>Bruschetta</h3>
            <p>$5.99</p>
          </div>
          <p>
            Our Bruschetta is made from grilled bread that 
            has been smeared with garlic and seasoned with salt and olive oil. 
          </p>
          <button className='orderBtn'>Order a delivery</button>
        </div>
        
        <div className="card">
          <img src={lemonDessert} className='foodImg'></img>
          <div className="foodHead">
            <h3>Lemon Dessert</h3>
            <p>$5.00</p>
          </div>
          <p>
            This comes straight from grandma's recipe book, 
            every last ingredient has been sourced and is as authentic as can be imagined.
          </p>
          <button className='orderBtn'>Order a delivery</button>
        </div>
      </article>
    </section>
  )
}

export default specials
