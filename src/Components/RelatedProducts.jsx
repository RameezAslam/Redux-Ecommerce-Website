import React from 'react'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowLeft , ArrowRight } from 'lucide-react';
import new_collections from './Assets/new_collections';
import ProductCard from './ProductCard';

function RelatedProducts() {
  const [sliderInstanceRef , slider] = useKeenSlider({
     loop: true,
     breakpoints: {
        "(min-width: 470px)": {
         slides: { perView: 2, spacing: 10 },
       },
       "(min-width: 830px)": {
         slides: { perView: 3, spacing: 10 },
       },
        "(min-width: 1280px)": {
         slides: { perView: 4, spacing: 15 },
       },
        "(min-width: 1580px)": {
         slides: { perView: 5, spacing: 15 },
       },
         "(min-width: 1700px)": {
         slides: { perView: 6, spacing: 15 },
       },
     },
     slides: { perView: 1, spacing: 10 },
   },
 
    [
       // autoplay plugin
       (slider) => {
         let timeout;
         let mouseOver = false;
 
         function clearNextTimeout() {
           clearTimeout(timeout);
         }
 
         function nextTimeout() {
           clearTimeout(timeout);
           if (mouseOver) return;
           timeout = setTimeout(() => {
             slider.next();
           }, 2000);
         }
 
         slider.on("created", () => {
           slider.container.addEventListener("mouseover", () => {
             mouseOver = true;
             clearNextTimeout();
           });
           slider.container.addEventListener("mouseout", () => {
             mouseOver = false;
             nextTimeout();
           });
           nextTimeout();
         });
         slider.on("dragStarted", clearNextTimeout);
         slider.on("animationEnded", nextTimeout);
         slider.on("updated", nextTimeout);
       },
     ]
 );
 
   return (
     <div className='mt-20 px-4 md:px-12 relative z-20'>
       <h1 className='text-gray-800 ml-4 font-semibold text-2xl mb-4'>Related Products</h1>
       <div ref={sliderInstanceRef} className='keen-slider'>
         {new_collections.map((item, i) => (
             <div key={i} className='keen-slider__slide'>
               <ProductCard
                 id={item.id}
                 name={item.name} 
                 image={item.image} 
                 new_price={item.new_price}
                 old_price={item.old_price}  />
             </div>     
         ))}
       </div>
        {slider && (
         <>
           <button
             onClick={() => slider?.current?.prev()}
             className="absolute top-[50%] -translate-y-1/2 left-2  bg-gray-700 text-white hover:bg-gray-500 transform transition duration-500 shadow-md p-2 rounded-full z-50"
           >
             <ArrowLeft size={20} />
           </button>
           <button
             onClick={() => slider?.current?.next()}
             className="absolute top-[50%] -translate-y-1/2 right-2 bg-gray-700 text-white hover:bg-gray-500 transform transition duration-500 shadow-md p-2 rounded-full z-50"
           >
             <ArrowRight size={20} />
           </button>
         </>
       )}
     </div>
   )
}

export default RelatedProducts