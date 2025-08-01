import React , {useState} from 'react'
import './Cart.css'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Plus, Minus } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { updateCartQuantity , removeFromCart } from '../store/cartSlice';
import YouMayLike from '../Components/YouMayLike';

function Cart() {
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const [updateQuantity, setUpdateQuantity] = useState();
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity from going below 1
    setUpdateQuantity(newQuantity);
    dispatch(updateCartQuantity({ id, quantity: newQuantity }));
    alert("Quantity updated successfully");
  };

  const handleRemoveFromCart = (id , quantity) => {
    dispatch(removeFromCart(id , quantity));
    alert("Product removed from cart");
  };

  return (
    <div className='mt-[10rem] max-w-full'>
      <h1 className='text-gray-800 font-semibold text-center text-4xl mb-12'>Your Cart</h1>
      <div className='container mx-auto p-0 md:px-4`'>
      <div className='max-w-full px-4 sm:px-8 md:px-12 grid grid-cols-1 gap-8 lg:grid-cols-3 '>
        <div className='flex flex-col gap-4 max-w-full lg:col-span-2 '>
            {cartItems.length > 0 ? (
                cartItems.map((item) => (
                <div key={`${item.id} ${item.selectedSize}`} className='flex gap-4 max-w-full px-8 border border-gray-200 py-4 rounded-lg shadow-md'>
                  <div className='mobile-responsive flex gap-4'>
                        <img src={item.image} alt={item.name} className='w-[8rem] h-[8rem] object-cover' />
                   <div className='flex flex-col items-start gap-2'>
                      <h3 className='text-lg text-gray-600 font-semibold truncate w-[10rem] sm:w-[12rem] md:w-[16rem] lg:w-[24rem]'>{item.name}</h3>
                      <p className='flex gap-4 text-gray-600'> <span className='text-gray-800 font-semibold'>Price:</span> ${item.new_price.toFixed(2)}</p>
                    <div className='flex items-center gap-4'>
                      <span className='text-gray-800 font-semibold'>Quantity:</span>
                        <div className='flex gap-4 border border-gray-200 p-2 rounded-md'>
                            <button className='text-red-600' onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                                <Minus size={16} />
                            </button>
                            <span className='text-gray-700'>{item.quantity}</span>
                            <button className='text-green-600' onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                                <Plus size={16} />
                            </button>
                        </div>          
                      </div>
                         <p className='flex gap-4 text-gray-600'> <span className='text-gray-800 font-semibold'>Size:</span>{item.selectedSize}</p>
                        <button onClick={() => handleRemoveFromCart(item.id, item.quantity)} className='text-red-600 font-semibold'>Remove</button>
                    </div>
                </div>
             </div>
                  ))
              ) : (
                  <p className='text-2xl text-gray-700 font-semibold'>Your cart is empty.</p>
              )}
          </div>
      <div className='border h-[22rem] py-12 max-w-full max-w-100 border-gray-200 px-8 rounded-lg shadow-md'>
          <h2 className='text-xl text-gray-600 font-semibold mb-8 text-center'>Order Summary</h2>
            <div className='flex flex-col gap-6'>
              {cartItems.length > 0 && (
                <>
                  <div className='flex justify-between gap-8 text-lg'>
                     <span className=' text-gray-600 font-semibold'>Total Items:</span>
                      <span className='text-gray-600 font-semibold'>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
                   </div>
                   <hr className='bg-gray-400 h-[0.2rem]' />
                  <div className='flex justify-between gap-8 text-lg'>
                     <span className=' text-gray-600 font-semibold'>Total Price:</span>
                      <span className='text-gray-600 font-semibold'>${cartItems.reduce((total, item) => total + (item.new_price * item.quantity), 0).toFixed(2)}</span>
                   </div>
                  <hr className='bg-gray-400 h-[0.2rem]' />
                  <Link className='max-w-full' to="/checkout">
                      <button 
                        className='bg-blue-500 text-white hover:bg-transparent hover:text-blue-500 border
                        border-blue-500 px-4 py-2 rounded-md mt-4 font-semibold transition-colors duration-300 '>
                          Proceed to Checkout
                      </button>
                  </Link>
                </>
              )}
            </div>
       </div>
    </div>
    </div>
    <div className='w-full'>
        <YouMayLike />
    </div>
  </div>
  )
}

export default Cart