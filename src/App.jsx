import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './components/navigation/navBar'
import Home from './components/home/home'
import About from './components/about/about'
import Reservation from './components/table_booking/reservation'
import Menu from './components/menu/menu'
import Cart from './components/cart/Cart'
import Login from './components/login/login'
import ConfirmBooking from './components/ConfirmedBooking/confirmBooking'
import Dishes from './components/menu/dish/Dish'
import Payment from './components/payment/Payment'
import Cod from './components/payment/paymentMode/cod'
import CreditCard from './components/payment/paymentMode/CreditCard'
import Confirmation from './components/payment/paymentMode/confirmation'

import './App.css'

function App() {
  const [cartItems, setCartItems] = React.useState([])

  function addItems(dish){
    setCartItems((prevItems) => {
      const existingItems = prevItems.find(item => item.dishName === dish.dishName)

      if(existingItems){
        return prevItems.map(item =>(
            item.dishName === dish.dishName ? { ...item , quantity: item.quantity + 1} : item
          )
        ) 
      }else{
        return [...prevItems, {...dish, quantity: 1}]
      }
    })
  }

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/reservation' element={<Reservation/>} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/:dishName' element={<Dishes onAddCart={addItems}/>} />
          <Route path='/cart' element={<Cart cartItems={cartItems}/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/confirmBooking' element={<ConfirmBooking/>}/>
          <Route path='/payment' element={<Payment />} />
          <Route path='/cod' element={<Cod />} />
          <Route path='/card' element={<CreditCard />} />
          <Route path='/confirmation' element={<Confirmation />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
