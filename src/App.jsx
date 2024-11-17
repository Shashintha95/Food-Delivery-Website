//import React from 'react'

import { Routes , Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from "./components/Footer/Footer"
import Loginpopup from "./components/LoginPopup/Loginpopup"
import { useState } from "react"

const App = () => {

  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
      {showLogin && <Loginpopup setShowLogin={setShowLogin} />}
      <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>

      </Routes>
    </div>
     <Footer/> 
   
     </>
   
  )
}

export default App