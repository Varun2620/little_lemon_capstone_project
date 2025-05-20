import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import tick from '../../assets/correct.png'
import './confirmedBooking.css'

function confirmBooking() {
  const [confirm, setConfirm] = React.useState(false)
  const {state} = useLocation()
  const navigate = useNavigate()

  const {date, time, guests, occasion} = state

  function handleClick(){
    setConfirm((prevState) => {
      prevState = true
      return prevState
    }) 
  }

  function handleNavigate(){
    navigate('/')
  }

  return (
    <section className='confirmBookingContainer'>
      
      {confirm ? 
        <article className='bookingConfirmation'>
          <img src={tick} alt='Booking Confirmed'/>
          <h3>Your Booking Has Been Confirmed!!</h3>
          <p>Thank you using our website!! Visit again!!</p>
          <button onClick={handleNavigate} className='backBtn'>Back To Home</button>
        </article>
        : 
        <article className='bookingDetails'>
          <h3>Booking Details</h3>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Number Of Guests:</strong> {guests}</p>
          <p><strong>Occasion:</strong> {occasion}</p>

          <div className="btnContainer">
            <button onClick={()=> navigate('/reservation', {state})}>Edit Reservation</button>
            <button onClick={handleClick}>Confirm Reservation</button>
          </div>
        </article>
      }
    </section>
  )
}

export default confirmBooking
