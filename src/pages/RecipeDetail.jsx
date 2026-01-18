import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Tag, Clock, Users, ChefHat, ArrowLeft, List } from 'lucide-react'

const RecipeDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [meal, setMeal] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        setMeal(response.data.meals[0])
      } catch (err) {
        setError('Failed to fetch recipe details')
      } finally {
        setLoading(false)
      }
    }

    fetchMeal()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  if (error || !meal) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error</h2>
          <p className="text-gray-600">{error || 'Recipe not found'}</p>
        </div>
      </div>
    )
  }

  // Extract ingredients
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
    if (ingredient && ingredient.trim()) {
      ingredients.push({ ingredient, measure })
    }
  }

  // Extract tags
  const tags = meal.strTags ? meal.strTags.split(',').map(tag => tag.trim()) : []

  // YouTube embed URL
  const youtubeId = meal.strYoutube ? meal.strYoutube.split('v=')[1]?.split('&')[0] : null
  const embedUrl = youtubeId ? `https://www.youtube.com/embed/${youtubeId}` : null

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 mb-6 text-amber-700 hover:text-amber-900 transition-colors duration-200"
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Back to Home</span>
      </button>
      
      <h1 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8 text-center">{meal.strMeal}</h1>
      
      {/* First row: Image + Tags and Ingredients */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Image and Tags Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden min-h-[500px]">
          <img 
            src={meal.strMealThumb} 
            alt={meal.strMeal} 
            className="w-full h-80 md:h-96 object-cover"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold text-amber-900 mb-4 flex items-center gap-2">
              <Tag size={20} />
              Tags & Info
            </h2>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {tags.length > 0 ? tags.map((tag, index) => (
                  <span key={index} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                )) : (
                  <span className="text-gray-500">No tags available</span>
                )}
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <ChefHat size={18} className="text-amber-600" />
                  <span className="text-sm text-gray-600">Category: {meal.strCategory}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users size={18} className="text-amber-600" />
                  <span className="text-sm text-gray-600">Area: {meal.strArea}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Ingredients Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 min-h-[500px]">
          <h2 className="text-xl font-semibold text-amber-900 mb-4 flex items-center gap-2">
            <List size={20} />
            Ingredients
          </h2>
          <div className="h-[400px] overflow-y-hidden hover:overflow-y-auto">
            <div className="space-y-3">
              {ingredients.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3  rounded-lg">
                  <span className="font-medium text-gray-800">{item.ingredient}</span>
                  <span className="text-amber-700 font-semibold">{item.measure}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Second row: Video and Instructions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* YouTube Video Card */}
        {embedUrl && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-amber-900 mb-4">Video Tutorial</h2>
            <div className="aspect-video">
              <iframe
                src={embedUrl}
                title={`${meal.strMeal} tutorial`}
                className="w-full h-full rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Instructions Card */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-amber-900 mb-4 flex items-center gap-2">
            <ChefHat size={20} />
            Cooking Instructions
          </h2>
          <div className="prose prose-lg max-w-none">
            {meal.strInstructions.split('\r\n').map((instruction, index) => (
              instruction.trim() && (
                <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                  {instruction.trim()}
                </p>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail
