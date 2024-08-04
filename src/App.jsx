import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/page/Home' // Ensure you have a Home component
import SingleProduct from './page/SingleProduct'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/SingleProduct' element={<SingleProduct/>}/>
      </Routes>
    </>
  )
}

export default App

