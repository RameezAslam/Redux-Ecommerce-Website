import React from 'react'
import arrow_icon from './Assets/breadcrum_arrow.png'

function Breadcrum(props) {
   const {product} = props
  return (
    <div className='flex items-start mx-8 lg:items-center gap-4 text-gray-600 font-semibold lg:mx-40'>
        <span className='hidden md:block'> HOME </span> <img className='hidden md:block' src={arrow_icon} /> 
        <span className='hidden md:block'>PRODUCT DETAILS</span>  <img className='hidden md:block' src={arrow_icon} />
         <span className='hidden md:block'>{product.category}</span> <img src={arrow_icon} />
          <span>{product.name}</span> 
    </div>
  )
}

export default Breadcrum