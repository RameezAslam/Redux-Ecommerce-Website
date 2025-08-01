import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import ProductDetails from './Pages/ProductDetails'
import Cart from './Pages/Cart'
import Checkout from './Pages/Checkout'
import Category from './Pages/Category'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import ProtectedRoute from './Components/ProtectedRoute'
import Layout from './Components/Layout'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

function App() {
    const [count, setCount] = useState(0)

  return (
    <div>
       <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Home />} />
              <Route path="/cart" element={<ProtectedRoute> <Cart /> </ProtectedRoute>} />
              <Route path="/checkout" element={<ProtectedRoute> <Checkout /> </ProtectedRoute>} />
              <Route path="/mens" element={<Category banner={men_banner} category= "men" />} />
              <Route path="/womens" element={<Category banner={women_banner} category= "women" />} />
              <Route path="/kids" element={<Category banner={kids_banner} category= "kid" />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>
          </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
