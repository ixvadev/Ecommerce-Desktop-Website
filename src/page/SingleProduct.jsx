import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function SingleProduct() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <div className='flex gap-[10px]'>
          <div>
            <a href="">Home</a>
            <img src="/assets/SingleProduct/Vector.svg" alt="" />
          </div>
          <div>
            <a href="">Shop</a>
            <img src="../assets/Single Product/Vector.svg" alt="" />
          </div>
          <a href="">Asgaard sofa</a>
        </div>

        <div>
          <img src="../assets/Product1.svg" alt="" />
          <img src="/assets/Product2.svg" alt="" className='h-[100px]' />
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default SingleProduct