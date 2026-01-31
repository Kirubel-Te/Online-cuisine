import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { Search, Loader2 } from 'lucide-react'
import RecipeCard from '../components/RecipeCard'

const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q') || ''
  const type = searchParams.get('type') || 'Name'

  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchResults = async () => {
    if (!q.trim()) {
      setMeals([])
      return
    }
    try {
      setLoading(true)
      setError(null)
      const url =
        type === 'Ingredient'
          ? `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(q.trim())}`
          : `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(q.trim())}`
      const response = await axios.get(url)
      setMeals(response.data.meals || [])
    } catch (err) {
      setError('Failed to search meals')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchResults()
  }, [q, type])

  const isByName = type === 'Name'
  // search.php returns full meal objects (strCategory, strArea); filter.php returns minimal (no category/area)
  const normalizeMeal = (meal) => ({
    idMeal: meal.idMeal,
    strMeal: meal.strMeal,
    strMealThumb: meal.strMealThumb,
    strCategory: meal.strCategory || '',
    strArea: meal.strArea || '',
  })

  return (
    <div className="w-full md:w-[95%] lg:w-[98%] mx-auto mt-8 mb-8">
      <div className="flex items-center gap-3 p-3 mb-4">
        <Search className="text-amber-700" />
        <h2 className="lg:text-4xl text-2xl font-bold text-amber-800">
          Search results {q && `for "${q}"`}
        </h2>
      </div>
      <p className="text-amber-600 md:text-xl px-3 font-light mb-8">
        {isByName ? 'Meals matching your search by name.' : 'Meals that use this ingredient.'}
        {!loading && meals.length > 0 && ` Found ${meals.length} recipe(s).`}
      </p>

      <div className="mb-8 mt-5 w-[95%] md:w-[95%] lg:w-[98%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-8 items-stretch auto-rows-fr justify-items-stretch">
        {loading && (
          <div className="col-span-full flex justify-center">
            <Loader2 className="animate-spin text-amber-600" size={32} />
          </div>
        )}
        {error && <p className="col-span-full text-center text-red-500">{error}</p>}
        {!loading && !q.trim() && (
          <p className="col-span-full text-center text-gray-500">Enter a search term to find recipes.</p>
        )}
        {!loading && q.trim() && meals.length === 0 && !error && (
          <p className="col-span-full text-center text-gray-500">No meals found. Try a different search.</p>
        )}
        {!loading &&
          meals.length > 0 &&
          meals.map((meal) => {
            const m = normalizeMeal(meal)
            return (
              <div key={m.idMeal} className="w-full p-2 box-border h-full">
                <RecipeCard
                  title={m.strMeal}
                  category={m.strCategory}
                  country={m.strArea}
                  image={m.strMealThumb}
                  id={m.idMeal}
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default SearchResults
