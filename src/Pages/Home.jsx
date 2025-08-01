import React from 'react'
import Hero from '../Components/Hero'
import Popular from '../Components/Popular'
import Offers from '../Components/Offers'
import NewCollections from '../Components/NewCollections'

function Home() {
  return (
    <div className='mt-16'>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>

  )
}

export default Home