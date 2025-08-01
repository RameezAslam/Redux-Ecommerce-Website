import React from 'react'
import footer_logo from './Assets/logo_big.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
<footer className="bg-gray-900 text-white py-10 mt-40">
  <div className="max-w-7xl mx-auto px-12 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      
      <div className='flex flex-col gap-4'>
        <img src={footer_logo} className='w-12'></img>
        <p className="text-sm text-gray-400">
          Discover quality products at great prices. Fast delivery & excellent customer service.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><Link to='/' className="hover:text-white">Home</Link></li>
          <li><Link to='/mens' className="hover:text-white">Shop</Link></li>
          <li><Link to='/' className="hover:text-white">About Us</Link></li>
          <li><Link to='/' className="hover:text-white">Contact</Link></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
        <ul className="space-y-2 text-gray-400 text-sm">
          <li><a href="#" className="hover:text-white">FAQs</a></li>
          <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
          <li><a href="#" className="hover:text-white">Order Tracking</a></li>
          <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
        <form className="flex flex-col gap-2">
          <input type="email" placeholder="Your email" className="px-4 py-2 rounded text-black" />
          <button className="bg-blue-600 hover:bg-blue-700 py-2 rounded">Subscribe</button>
        </form>
        <div className="flex space-x-4 mt-4">
          <Link to='#' className="hover:text-blue-400"><i className="fab fa-facebook-f"></i></Link>
          <Link to='#' className="hover:text-pink-400"><i className="fab fa-instagram"></i></Link>
          <Link to='#' className="hover:text-blue-300"><i className="fab fa-twitter"></i></Link>
          <Link to='#' className="hover:text-red-500"><i className="fab fa-youtube"></i></Link>
        </div>
      </div>

    </div>

    <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
      © 2025 MyEcommerce. All rights reserved. Made by Rameez Aslam
    </div>
  </div>
</footer>

  )
}

export default Footer