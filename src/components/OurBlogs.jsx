import React from 'react'

function OurBlogs() {
  return (
    <>
        <div className='container my-[20px]' >
            <p className='text-center text-[36px] mt-[20px]'>Our Blogs</p>
            <p className='text-center text-[#9F9F9F] text-[16px] my-[20px]'>Find a bright ideal to suit your taste with our great selection</p>
            
            <div className='flex justify-center gap-[20px]'>
                <div className=''>
                    <img src="../src/assets/Rectangle 13.svg" alt="" />
                    <div className='py-[20px]'>
                        <p className='text-[20px] py-[10px] text-center'>Going all-in with millennial design</p>
                        <p className='text-[24px] underline text-center py-[10px]'>Read More</p>
                    </div>
                    <div className='flex gap-[10px] justify-center'>
                        <div className='flex gap-[7px]'>
                            <img src="../src/assets/Group.svg" alt="" />
                            <p>5 min </p>
                        </div>
                        <div className='flex gap-[7px]'>
                            <img src="../src/assets/Vector (2).svg" alt="" />
                            <p>12th Oct 2022</p>
                        </div>
                    </div>
                </div>
                <div >
                    <img src="../src/assets/Rectangle 14.svg" alt="" />
                    <div  className='py-[20px]'>
                        <p className='text-[20px] py-[10px] text-center'>Going all-in with millennial design</p>
                        <p className='text-[24px] underline text-center py-[10px]'>Read More</p>
                    </div>
                    <div className='flex gap-[10px] justify-center'>
                        <div className='flex gap-[7px]'>
                            <img src="../src/assets/Group.svg" alt="" />
                            <p>5 min </p>
                        </div>
                        <div className='flex gap-[7px]'>
                            <img src="../src/assets/Vector (2).svg" alt="" />
                            <p>12th Oct 2022</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../src/assets/Rectangle 15.svg" alt="" />
                    <div className='py-[20px]'>
                        <p className='text-[20px] py-[10px] text-center'>Going all-in with millennial design</p>
                        <p className='text-[24px] underline text-center py-[10px]'>Read More</p> 
                    </div>
                    <div className='flex gap-[10px] justify-center'>
                        <div className='flex gap-[7px]'>
                            <img src="../src/assets/Group.svg" alt="" />
                            <p>5 min </p>
                        </div>
                        <div className='flex gap-[7px]'>
                            <img src="../src/assets/Vector (2).svg" alt="" />
                            <p>12th Oct 2022</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-center py-[60px] underline text-[20px]'>View More</p>
        </div>
    </>
  )
}

export default OurBlogs