import React from 'react'
import { useNavigate } from 'react-router-dom';
import './cart.css'

function Cart({cartItems}) {
  const navigate = useNavigate()

  const total = cartItems.reduce(
    (sum, item) => sum + item.dishPrice * item.quantity,
    0
  );

  return (
    <main className='cartMain'>
      <section className='cartContainer'>
        <h3>Cart</h3>
        <article className='cartItems'>
          {cartItems.length === 0 && <p>Your cart is empty!</p>}
          {cartItems.map(item => (
            <div key={item.dishName}>
              <p>{item.dishName} x {item.quantity} = ${item.dishPrice * item.quantity}</p>
            </div>
          ))}
          <h3>Total: $ {total.toFixed(2)}</h3>
        </article>
        <article className="btnContainer">
          <button className="cartBtn" onClick={() => navigate('/menu')}>Add more items to cart</button>
          <button className="cartBtn" onClick={() => {
            if(cartItems.length !== 0){
              navigate('/payment')
            }
          }} >Check out</button>
        </article>
      </section>
    </main>
  )
}

export default Cart
