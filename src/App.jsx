import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navigation from './components/navigation/navBar'
import Home from './components/home/home'
import About from './components/about/about'
import Reservation from './components/table_booking/reservation'
import OnlineOrder from './components/order_online/order'
import Login from './components/login/login'

import './App.css'

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/reservation' element={<Reservation/>} />
          <Route path='/onlineOrder' element={<OnlineOrder/>} />
          <Route path='/Login' element={<Login/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
