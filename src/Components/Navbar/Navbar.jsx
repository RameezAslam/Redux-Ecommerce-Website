import React, { useState } from 'react'
import nav_logo from '../Assets/logo.png'
import cart_img from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Menu, X } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { Search } from 'lucide-react'
import SearchBar from '../SearchBar'
import { useLocation } from 'react-router-dom'
import toast from 'react-hot-toast'

function Navbar() {
    const [menu, setMenu] = useState("home")
    const [isOpen, setIsOpen] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const totalQuanity = useSelector((state) => state.cart.cartItems.reduce((total, item) => total + item.quantity, 0));
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    
      const location = useLocation();
      const hideNavLinks = location.pathname === "/checkout";

    const handleLogout = () => {
        dispatch(logout());
        toast.success("Logout successful");
    }

  return (
    <div className='w-full px-8 bg-white border-b border-gray-200 shadow-md py-4 fixed top-0 z-50'>
        {showSearch && (
           <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              setShowSearch={setShowSearch}
           />
        )}
        <nav className='flex items-center justify-between '>
          <div className='flex items-center gap-4'>

          <div className="md:hidden">
              <button onClick={() => setIsOpen(true)}>
                <Menu className="w-8 h-8 text-gray-800" />
              </button>
           </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <span className="text-lg font-bold">Menu</span>
          <button onClick={() => setIsOpen(false)}>
            <X className="w-8 h-8" />
          </button>
        </div>

       <ul className='flex flex-col gap-4 p-4 nav-menu-mobile'>
          <li><Link to='/'><img className='w-12 sm:hidden' src={nav_logo} alt="Logo"/></Link> </li>
          <hr className='cart-under-hr' />
          <li onClick={() => {setMenu("home")}}> <Link className='text-black' to='/'>Home</Link> {menu === 'home' ? <hr /> : <></>} </li>
          <li onClick={() => {setMenu("mens")}}> <Link className='text-black' to='/mens'>Men</Link> {menu === 'mens' ? <hr /> : <></>} </li>
          <li onClick={() => {setMenu("womens")}}> <Link className='text-black' to='/womens'>Women</Link> {menu === 'womens' ? <hr /> : <></>} </li>
          <li onClick={() => {setMenu("kids")}}> <Link className='text-black' to='/kids'>Kids</Link> {menu === 'kids' ? <hr /> : <></>} </li>
        </ul>
      </div>
      <Link className='hidden sm:flex' to='/'><img className='w-12 md:w-16' src={nav_logo} alt="Logo"/></Link> 

          {isOpen && (
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
            />
          )} 
          
      </div>
      {!hideNavLinks && (
          <div>
              <ul className='hidden md:flex font-semibold text-lg gap-8 items-center nav-menu'>
                  <li className='text-black hover:text-gray-500 hover:translate-y-[-5px] transition-transform duration-300'
                     onClick={() => {setMenu("home")}}> <Link  to='/'>Home</Link>
                   {menu === 'home' ? <hr /> : <></>} </li>
                   <li className='text-black hover:text-gray-500 hover:translate-y-[-5px] transition-transform duration-300'
                     onClick={() => {setMenu("mens")}}> <Link  to='/mens'>Men</Link>
                   {menu === 'mens' ? <hr /> : <></>} </li>
                    <li className='text-black hover:text-gray-500 hover:translate-y-[-5px] transition-transform duration-300'
                     onClick={() => {setMenu("womens")}}> <Link  to='/womens'>Women</Link>
                   {menu === 'womens' ? <hr /> : <></>} </li>
                    <li className='text-black hover:text-gray-500 hover:translate-y-[-5px] transition-transform duration-300'
                     onClick={() => {setMenu("kids")}}> <Link  to='/kids'>Kids</Link>
                   {menu === 'kids' ? <hr /> : <></>} </li>
                </ul>
            </div>
      )

      }
          

      <div className='flex items-center gap-4 sm:gap-8'>
        <div>
            <button onClick={() => setShowSearch(true)} className='text-gray-600'>
                <Search className='w-8 h-8' />
            </button>
        </div>
          <div className='relative'>
            <Link className='relative' to="/cart" onClick={() => {setMenu("cart")}}>
                 <img className='w-10' src={cart_img} alt="Cart"/>
            </Link>
            {totalQuanity > 0 && (
              <div className='absolute text-black font-bold top-0 right-0 bg-yellow-500 rounded-full w-5 h-5 flex items-center justify-center shadow-md'> 
                  <p>{totalQuanity}</p>
              </div>
            )}
          </div>
          {isAuthenticated ? (
            <Link to="/"><button onClick={handleLogout}
             className='font-semibold border border-gray-800 bg-gray-800 text-white hover:bg-transparent
             hover:text-black py-1 px-2 md:py-2 md:px-3 rounded-md transform transition duration-700'>Logout</button></Link>
          ) : (
            <Link to="/login">
              <button className='font-semibold border border-gray-700 bg-gray-700 text-white hover:bg-transparent
               hover:text-gray-700 py-2 px-3 rounded-md transform transition duration-700'>
                Login
              </button>
            </Link>
          )}      
      </div>
    </nav>   
  </div>
  )
}

export default Navbar