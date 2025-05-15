import React from 'react'
import img from '../../assets/react.svg'
import food1 from '../../assets/react.svg'
import './home.css'

function home() {
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
          <button className='bookBtn'>Reserve a Table</button>
        </div>
        <div className="homeRight">
          <img src={img} alt='' className='homeImg'></img>
        </div>
    </section>

    <section className='specials'>
      <article className="head">
        <h1>Specials</h1>
        <button className='menuBtn'>Online Menu</button>
      </article>
      <article className="specialsContent">
        <div className="card">
          <img src={food1} className='foodImg'></img>
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
          <img src={food1} className='foodImg'></img>
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
          <img src={food1} className='foodImg'></img>
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
   </main>
  )
}

export default home
