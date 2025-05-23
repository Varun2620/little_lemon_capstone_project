import React from 'react'
import { useNavigate } from 'react-router-dom'
import tick from '../../../assets/correct.png'

function confirmation() {
    const navigate = useNavigate()

    function handleNavigate(){
        navigate('/')
    }

  return (
    <section className="orderConfirmation">
        <article className='bookingConfirmation'>
            <img src={tick} alt='Order Confirmed'/>
            <h3>Your Order Has Been Confirmed!!</h3>
            <p>Thank you using our website!! Visit again!!</p>
            <button onClick={handleNavigate} className='backBtn'>Back To Home</button>
        </article>
    </section>
  )
}

export default confirmation
