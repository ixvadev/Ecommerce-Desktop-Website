import React from 'react'

function Side() {
  return (
    <>
        <div className='container flex flex-wrap justify-center py-[50px] bg-[#FAF4F4] h-[672px] '>
            <div className='w-[605px] h-[562]'>
                <img src="../src/assets/Mask group (1).svg" alt="" className='h-[500px]' />
                <p className='text-[36px]'>Side Table</p>
                <p className='underline text-[24px] w-[121px] border-b-[2px]'>View More</p>
            </div>
            <div className='w-[605px] h-[562]'>
                <img src="../src/assets/Mask group (2).svg" alt="" className='h-[500px]' />
                <p className='text-[36px]'>Side Table</p>
                <p className='underline text-[24px]'>View More</p>
            </div>
        </div>
    </>
  )
}

export default Side