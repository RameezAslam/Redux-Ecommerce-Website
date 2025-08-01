import React from 'react'
import hero_banner from './Assets/hero_image.png'
import hand_icon from './Assets/hand_icon.png'
import arrow_icon from './Assets/arrow.png'
import {Link} from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between max-w-[100%] p-6 sm:p-10 bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)]'>
        <div className='flex flex-col gap-4 p-4 sm:p-8 text-2xl md:text-4xl font-bold text-gray-800 animate-slideInLeft'>
            <div className='flex items-center gap-2'>
                <h2>New</h2>
                <img src={hand_icon} alt="Hand" className='w-12' />
            </div>
            <h2>Collections</h2>
            <h2>For Everyone</h2>
            <div className='flex items-center gap-2'>
                <Link to='/womens'>
                    <button className=' flex text-xl sm:text-2xl items-center gap-4 border border-red-500 bg-red-500
                      text-white rounded-lg py-2 px-1 sm:px-3 hover:bg-transparent hover:text-red-500 transform transition duration-700'>
                      Latest Collection 
                      <img className='w-4 sm:w-6 hover:bg-red-500' src={arrow_icon} alt="Arrow-icon" />
                </button>
                </Link> 
            </div>
           
        </div>
        <div className='animate-slideInRight'>
            <img src={hero_banner} alt="Hero Banner" className='w-full h-[22rem] md:h-[32rem] ' />
        </div>
    </div>
  )
}

export default Hero