import React from 'react'

const Footer = () => {
  return (
    <>
      <div className='container'>
        <div className='flex flex-wrap justify-around'>
            <div className='flex items-center'>
              <a className='text-[16px] texy-[#9F9F9F] py-[20px] text-[#9F9F9F]'  href="">400 University Drive Suite 200 Coral <br /> Gables, <br /> FL 33134 USA</a>
            </div>
            <div className='grid'>
              <a className='text-[#9F9F9F] py-[20px]' href="">Liks</a>
              <a className='py-[10px]' href="">Home</a>
              <a className='py-[10px]' href="">Shop</a>
              <a className='py-[10px]' href="">About</a>
              <a className='py-[10px]' href="">Contact</a>
            </div>
            <div className='grid'>
              <a className='text-[#9F9F9F] py-[20px]' href="">Help</a>
              <a className='py-[10px]' href="">Payment Options</a>
              <a className='py-[10px]' href="">Returns</a>
              <a className='py-[10px]' href="">Privacy Policies</a>
            </div>

            <div className='grid'>
              <a className='text-[#9F9F9F] py-[20px]' href="">Newsletter</a>
              <div className="flex my-[20px]">
                <input
                        type="email"
                        className="w-full px-4 py-2 border-b-2 rounded-l-md focus:outline-none"
                        placeholder="Enter Your Email Address"
                    />
                    <button className="border-b-2 text-black border-b-black px-4 rounded-r-md">SUBSCRIBE</button>
              </div>
            </div>
        </div>
      <div className='mx-[80px] py-[20px]'>
            <hr />
            <p className='text-[16px] my-[20px]'>2022 Meubel House. All rights reverved</p>
          </div>
      </div>
    </>
  )
}

export default Footer