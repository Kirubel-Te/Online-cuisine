import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChefHat, Home, ArrowLeft } from 'lucide-react'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="text-center px-4 py-16">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <ChefHat className="w-24 h-24 text-amber-600" />
        </div>

        {/* 404 Text */}
        <h1 className="text-8xl md:text-9xl font-bold text-amber-800 mb-4">404</h1>

        {/* Message */}
        <h2 className="text-2xl md:text-3xl font-semibold text-amber-700 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The recipe you're looking for seems to have wandered off. Let's get you back to finding delicious meals!
        </p>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>
      </div>
    </div>
  )
}

export default NotFound
