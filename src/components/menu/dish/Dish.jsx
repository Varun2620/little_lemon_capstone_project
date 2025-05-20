import React from 'react'
import { useParams } from 'react-router-dom'
import { dishData } from './dishData'
import cart from '../../../assets/add_shopping_cart.svg'
import './dish.css'

function Dish() {
  const { dishName } = useParams()
  const dish = dishData[dishName]

  if(!dish){
    return <h2>Dish details not found!!</h2>
  }

  return (
    <main className='dishContainer'>
        <section className="dishContent">
          <article className='dishDetails'>
            <img src={dish.dishImage} alt={dish.dishName} className='dishImg'></img>
            <h3>{dish.dishName}</h3>
            <p><strong>Price: </strong> $ {dish.dishPrice}</p>
            <p>{dish.dishDescription}</p>
          </article>
          <button className='cartBtn'>Add to cart<img src={cart} alt='cart'/></button>
        </section>
    </main>
  )
}

export default Dish
