import React from 'react'
import arrow_icon from './Assets/breadcrum_arrow.png'

function Breadcrum(props) {
   const {product} = props
  return (
    <div className='flex items-center gap-4 text-gray-600 font-semibold mx-40'>
         HOME <img src={arrow_icon} /> PRODUCT DETAILS <img src={arrow_icon} /> {product.category} <img src={arrow_icon} /> {product.name}
    </div>
  )
}

export default Breadcrum