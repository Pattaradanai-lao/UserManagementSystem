
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserService from '../service/UserService'

const LoginPage = () => {
const [email, setEmail] = useState('')
const [password,setPassword] = useState('')
const [error, setError] = useState('')

const navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const userData = await UserService.login(email,password)
        if (userData.token) {
            localStorage.setItem('token', userData.token)
            localStorage.setItem('role', userData.role)
            navigate('/profile')
        }else{
            setError(userData.message)
        }
        
    } catch (error) {
        console.log(error)
        setError(error.message)
        setTimeout(() => {
            setError('')
        }, 5000)
    }
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-xl w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          เข้าสู่ระบบ
        </h2>
        
        {error && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">
            <p>{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              อีเมล
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="กรอกอีเมลของคุณ"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              รหัสผ่าน
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="กรอกรหัสผ่าน"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            เข้าสู่ระบบ
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage