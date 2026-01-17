import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Tag, Loader2 } from 'lucide-react'
import RecipeCard from '../components/RecipeCard'

const CategoryDetail = () => {
  const { categoryName } = useParams()
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMeals = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
      setMeals(response.data.meals || [])
    } catch (err) {
      setError('Failed to fetch meals')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (categoryName) {
      fetchMeals()
    }
  }, [categoryName])

  return (
    <div className="w-full md:w-[95%] lg:w-[98%] mx-auto mt-8 mb-8">
      <div className="flex items-center gap-3 p-3 mb-4">
        <Tag className="text-amber-700" />
        <h2 className="lg:text-4xl text-2xl font-bold text-amber-800">{categoryName} Recipes</h2>
      </div>
      <p className="text-amber-600 md:text-xl px-3 font-light mb-8">
        Discover delicious {categoryName} meals from around the world. {meals.length > 0 && `Found ${meals.length} recipes.`}
      </p>

      <div className='mb-8 mt-5 w-[95%] md:w-[95%] lg:w-[98%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-8 items-stretch auto-rows-fr justify-items-stretch'>
        {loading && <div className="col-span-full flex justify-center"><Loader2 className="animate-spin text-amber-600" size={32} /></div>}
        {error && <p className="col-span-full text-center text-red-500">{error}</p>}
        {!loading && meals.length > 0 && meals.map(meal => (
          <div key={meal.idMeal} className="w-full p-2 box-border h-full">
            <RecipeCard 
              title={meal.strMeal} 
              category={categoryName} 
              image={meal.strMealThumb} 
              id={meal.idMeal} 
            />
          </div>
        ))}
        {!loading && meals.length === 0 && !error && <p className="col-span-full text-center text-gray-500">No meals found for this category.</p>}
      </div>
    </div>
  )
}

export default CategoryDetail
