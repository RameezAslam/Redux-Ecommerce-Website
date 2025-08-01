import React,{useRef} from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

function ProductCard( props ) {
  const ref = useRef(null)
   const isInView = useInView(ref, { once: true });


  return (
    <motion.div 
       ref={ref}
      initial={{ opacity: 0, y: 70 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className='flex flex-col border p-4 gap-4 rounded-lg shadow-md hover:scale-125 transition-transform duration-500'>
        <Link to={`/product/${props.id}`} onClick={() => window.scrollTo(0, 0)}>
          <img src={props.image} alt={props.name} />
        </Link> 
         <p className='text-[1rem] text-gray-600 font-semibold'>{props.name}</p>
        <div className='flex gap-8 items-center'>
            <div className='text-gray-800 font-bold'> ${props.new_price} </div>
            <div className='line-through text-gray-400'> ${props.old_price} </div>     
        </div>
    </motion.div>
  )
}

export default ProductCard