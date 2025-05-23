import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dishData } from './dishData'
import cart from '../../../assets/add_shopping_cart.svg'
import './dish.css'

function Dish({ onAddCart }) {
  const navigate = useNavigate()
  const { dishName } = useParams()
  const dish = dishData[dishName]
  console.log(dish)

  if(!dish){
    return(  
    <div className="dishError">
      <h2>Dish details not found!!</h2>
      <button className='dishBtn' onClick={()=> navigate('/menu')}>Back to Menu</button>
    </div> 
    ) 
  }

  function handleCart(){
    onAddCart(dish)
    navigate('/cart')
  }

  return (
    <main className='dishContainer'>
      <button className='prevBtn' onClick={()=> navigate('/menu') }>Back</button>
        <section className="dishContent">
          <article className='dishDetails'>
            <img src={dish.dishImage} alt={dish.dishName} className='dishImg'></img>
            <h3>{dish.dishName}</h3>
            <p><strong>Price: </strong> $ {dish.dishPrice}</p>
            <p>{dish.dishDescription}</p>
          </article>
          <button className='cartBtn' onClick={handleCart}>Add to cart<img src={cart} alt='cart'/></button>
        </section>
    </main>
  )
}

export default Dish
