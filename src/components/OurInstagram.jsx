import React from 'react'

function OurInstagram() {
  return (
    <>
        <div className="container h-[450px] bg-[url('../src/assets/Rectangle 17.svg')]">
        <div className='flex justify-center items-center'>
            <div className='w-[454px] m-auto'>
                <p className='text-[60px] font-bold my-[20px] text-center'>Our Instagram</p>
                <p className='text-[20px] text-center'>Follow our store on Instagram</p>
                <div className='flex justify-center my-[10px]'>
                    <button className='w-[255px] h-[65px] text-[20px] bg-[#ffff] rounded-[50px]'>Follow Us</button>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default OurInstagram