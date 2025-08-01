import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { signup } from '../store/authSlice'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSignup = (e) => {
      e.preventDefault()

      const userData = {
        name,
        email,
        password
      }

      dispatch(signup(userData))
      alert("Signup successful")
  }

  return (
    <div className="flex mt-20 justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <form onSubmit={handleSignup} className="space-y-4">
        <div>
            <label className="block mb-1 text-sm">Username</label>
            <input
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className='relative'>
            <label className="block mb-1 text-sm">Password</label>
            <input
              type={showPassword ? "type" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
                onClick={() => setShowPassword(!showPassword)}
               className='absolute top-[60%] right-3 cursor-pointer text-gray-500'
            >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Signup
          </button>
        </form>
      </div>
    </div>

  )
}

export default Signup