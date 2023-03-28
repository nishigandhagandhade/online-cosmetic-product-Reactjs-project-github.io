import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ProductInfo from './components/ProductInfo'
import { CartProvider } from 'react-use-cart'



const App = () => {
    return (
        <>


            <CartProvider>

                <Router>

                    <Navbar />

                    <Routes>


                        <Route path='/' element={<Home />} />
                        <Route path='/productinfo/:id' element={<ProductInfo />} />
                        <Route path='/cart' element={<Cart />} />




                    </Routes>

                </Router>
            </CartProvider>

        </>

)
}

export default App
