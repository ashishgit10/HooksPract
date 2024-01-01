import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ErrorPage from "./Components/ErrorPage"
import Product from './Components/Product'
import Navbar from './Components/Navbar'
import Cart from "./Components/Cart"
import Home from "./Components/Home"
import "./index.css"
export function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
