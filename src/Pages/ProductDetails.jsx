import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice';
import all_products from '../Components/Assets/all_product';
import star_icon from '../Components/Assets/star_icon.png'
import star_dull from '../Components/Assets/star_dull_icon.png'
import RelatedProducts from '../Components/RelatedProducts';
import ProductFeatures from '../Components/ProductFeatures';
import Breadcrum from '../Components/Breadcrum';

function ProductDetails() {
  const { id } = useParams()
  const product = all_products.find(item => item.id === Number(id))
  if (!product) {
  return <div className="mt-[6rem] p-10">Product not found.</div>;
  }

  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1); 
  const [selectedSize, setSelectedSize] = useState("")

  const handleAddToCart = () => {
     dispatch(addToCart({id: product.id, quantity, selectedSize: selectedSize}));
     if(selectedSize) {
          alert("Product added to cart")
     } else {
        alert("Product not added to cart")
     }  
  }

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value)
  }
  
  const sizes = ["S","M","L","XL","XXL"]

  return (
    <div className='w-full container mx-auto mt-36'>
      <Breadcrum product={product} />
    <div className=' max-w-[120rem] flex flex-col justify-center items-center gap-8 lg:flex-row min-h-screen p-8'>
        <div className='flex gap-8 w-full lg:w-1/2'>
          <div className='flex flex-col gap-4'>
              <img className='w-14 md:w-20' src={product.image} alt="product-image" />
              <img className='w-14 md:w-20' src={product.image} alt="product-image" />
              <img className='w-14 md:w-20' src={product.image} alt="product-image" />
              <img className='w-14 md:w-20' src={product.image} alt="product-image" />
          </div>
            <div>
                <img className='w-[20rem] h=[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[30rem] md:h-[30rem] ' src={product.image} alt="product-image" />
            </div>
        </div>
        <div className='flex flex-col gap-6 w-full lg:w-1/2'>
            <h1 className='text-2xl md:text-3xl text-[#3d3d3d] font-bold'>{product.name}</h1>
            <div className='flex items-center gap-2 '>
                <img className='w-4 h-4 md:w-6 md:h-6' src={star_icon} alt="star-icon" />
                <img className='w-4 h-4 md:w-6 md:h-6' src={star_icon} alt="star-icon" />
                <img className='w-4 h-4 md:w-6 md:h-6' src={star_icon} alt="star-icon" />
                <img className='w-4 h-4 md:w-6 md:h-6' src={star_icon} alt="star-icon" />
                <img className='w-4 h-4 md:w-6 md:h-6' src={star_dull} alt="star-icon" />
            </div>
            <div className='flex items-center gap-8 text-xl md:text-2xl font-semibold'>
                <div className='line-through text-gray-400'>${product.old_price}</div>
                <div className='text-gray-800 font-bold'>${product.new_price}</div>
            </div>
            <div className='flex max-w-[100%]'>
                <p className='text-gray-600 font-semibold text-[0.8rem] md:text-[1rem]'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque laboriosam quo tenetur fugit
                     ad sapiente nemo eos enim eligendi? Sapiente blanditiis tempora ad ut? Amet non praesentium 
                     necessitatibus. Deleniti obcaecati ducimus vel. Ad incidunt nam repellat voluptatibus obcaecati 
                     natus nostrum, eum molestiae? Qui, illo nihil! Quis nihil tenetur aspernatur aliquid?
                  </p>
            </div>
          <div className='flex gap-4 items-center'>
               <label htmlFor="size" className="font-semibold text-gray-800">Select Size:</label>
              <select
                id="size"
                value={selectedSize}
                onChange={handleSizeChange}
                className="border p-2 rounded focus:outline-none text-gray-600 font-serif"
              >
                <option value="">Choose a size </option>
                {sizes.map((size) => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
          </div>
            <div className='flex  gap-4 items-center'>
                <h1 className='text-lg text-gray-800 font-semibold'>Select Quantity</h1>
                <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="mt-2 border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                </select>
            </div>
            <div className='flex items-center'>
                <button onClick={handleAddToCart} className='bg-gray-800 border-2 border-gray-800 text-white hover:bg-transparent
                 hover:text-gray-800 hover:font-bold font-semibold py-2 px-4 rounded-md transform transition duration-700'>
                  Add to Cart
                </button>
            </div>
          </div>
    </div>
         <ProductFeatures />           
        <RelatedProducts />
    </div>
  )
}


export default ProductDetails