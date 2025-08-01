import React from 'react'
import { Link } from 'react-router-dom'
import exclusive_image from './Assets/exclusive_image.png'

function Offers() {
  return (
     <div className='flex flex-col mt-40 md:flex-row items-center justify-between max-w-[100%] p-6 sm:p-10 bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)]'>
        <div className='flex flex-col gap-4 p-4 sm:p-8 text-2xl md:text-4xl font-bold text-gray-800'>
            <h2>Exclusive</h2>
            <h2>Offers For You</h2>
            <p className='text-xl text-gray-800'>ONLY ON BEST SELLERS PRODUCTS</p>
              <div className='flex items-center gap-2'>
                    <Link to='/womens'>
                        <button className=' flex text-2xl items-center gap-4 border border-red-500 bg-red-500
                          text-white rounded-lg py-2 px-3 hover:bg-transparent hover:text-red-500 transform transition duration-700'>
                          Check Now
                    </button>
                    </Link> 
                </div>  
             </div>
                <div>
                  <img src={exclusive_image} alt="Image" className='w-full h-[22rem] md:h-[32rem] ' />
               </div>
          </div>
  
  )
}

export default Offers