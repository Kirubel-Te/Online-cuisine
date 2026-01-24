import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Star, Heart, Loader2, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useFavourites } from '../contexts/FavouritesContext'
import RecipeCard from '../components/RecipeCard'

const Favourite = () => {
  const { favourites, clearAll } = useFavourites()
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchFavouriteMeals = async () => {
      if (favourites.length === 0) {
        setMeals([])
        return
      }
      try {
        setLoading(true)
        setError(null)
        const requests = favourites.map(id =>
          axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        )
        const responses = await Promise.all(requests)
        const data = responses
          .map(r => r.data.meals?.[0])
          .filter(Boolean)
        setMeals(data)
      } catch (err) {
        setError('Failed to load favourites')
      } finally {
        setLoading(false)
      }
    }
    fetchFavouriteMeals()
  }, [favourites])

  return (
    <div className="w-full md:w-[95%] lg:w-[98%] mx-auto mt-8 mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-3 mb-4">
        <div className="flex items-center gap-3">
          <Star className="text-amber-700" />
          <h2 className="lg:text-4xl text-2xl font-bold text-amber-800">My Favourites</h2>
        </div>
        {favourites.length > 0 && (
          <button
            onClick={clearAll}
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-md border-2 border-red-300 text-red-600 bg-red-50 hover:bg-red-100 hover:border-red-400 transition-colors duration-200 self-start sm:self-auto"
          >
            <Trash2 size={18} />
            <span>Clear all</span>
          </button>
        )}
      </div>

      <p className="text-amber-600 md:text-xl px-3 font-light mb-8">
        {favourites.length > 0
          ? `You have ${favourites.length} favourite recipe${favourites.length === 1 ? '' : 's'}.`
          : 'Save recipes you love with the heart icon to find them here.'}
      </p>

      {/* Empty state: no favourites */}
      {favourites.length === 0 && !loading && (
        <div className="w-full max-w-xl mx-auto mt-12 mb-8">
          <div className="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden flex flex-col items-center justify-center py-12 px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mb-4">
              <Heart className="text-amber-500 w-10 h-10" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">No favourites yet</h3>
            <p className="text-amber-600 font-light mb-6 max-w-sm">
              Start exploring and heart your favourite recipes. They’ll show up here.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 rounded-md bg-orange-500 text-white hover:bg-amber-600 transition-colors"
              >
                Explore recipes
              </button>
              <button
                onClick={() => navigate('/Categories')}
                className="px-4 py-2 rounded-md border-2 border-orange-400 text-orange-600 hover:bg-orange-50 transition-colors"
              >
                Browse categories
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Favourites grid */}
      {favourites.length > 0 && (
        <div className="mb-8 mt-5 w-[95%] md:w-[95%] lg:w-[98%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-8 items-stretch auto-rows-fr justify-items-stretch">
          {loading && (
            <div className="col-span-full flex justify-center">
              <Loader2 className="animate-spin text-amber-600" size={32} />
            </div>
          )}
          {error && (
            <p className="col-span-full text-center text-red-500">{error}</p>
          )}
          {!loading && !error && meals.length > 0 && meals.map(meal => (
            <div key={meal.idMeal} className="w-full p-2 box-border h-full">
              <RecipeCard
                title={meal.strMeal}
                category={meal.strCategory}
                country={meal.strArea}
                image={meal.strMealThumb}
                id={meal.idMeal}
              />
            </div>
          ))}
          {!loading && !error && meals.length === 0 && favourites.length > 0 && (
            <p className="col-span-full text-center text-gray-500">Could not load some favourites.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default Favourite
