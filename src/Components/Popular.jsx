import React from 'react'
import data_products from './Assets/data.js'
import ProductCard from './ProductCard'

function Popular() {
  return (
    <div className='mt-40'>
        <h1 className='text-center text-black font-bold text-4xl mb-10'>Popular in Women</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 animate-slideInUp'>
              {data_products.map((item,i) => {
                  return <ProductCard key={i} id={item.id} image={item.image} name={item.name}
                        new_price={item.new_price} old_price={item.old_price} />
              })}
          </div>
    </div>
  )
}

export default Popular