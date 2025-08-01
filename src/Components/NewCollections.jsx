import React from 'react'
import new_collection from './Assets/new_collections'
import ProductCard from './ProductCard'

function NewCollections() {
  return (
   <div className='mt-40'>
        <h1 className='text-center text-black font-bold text-4xl mb-10'>
          New Collections
        </h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4'>
              {new_collection.map((item,i) => {
                  return <ProductCard key={i} id={item.id} image={item.image} name={item.name}
                        new_price={item.new_price} old_price={item.old_price} />
              })}
          </div>
    </div>
  )
}

export default NewCollections