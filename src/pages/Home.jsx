import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ChefHat, Clock, ForkKnife, Globe, Star, TrendingUp, Loader2 } from 'lucide-react'
import { Search } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import DescCard from '../components/DescCard'
import RecipeCard from '../components/RecipeCard' 

const Home = () => {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  const fetchRandomMeals = async () => {
    try {
      setLoading(true)
      setError(null)
      const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
      const requests = Array.from({ length: 8 }).map(() => axios.get(url))
      const responses = await Promise.all(requests)
      const data = responses.map(r => r.data.meals[0])
      setMeals(data)
      localStorage.setItem('randomMeals', JSON.stringify(data))
    } catch (err) {
      setError('Failed to fetch meals')
    } finally {
      setLoading(false)
      document.getElementById('featured-today')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const savedMeals = JSON.parse(localStorage.getItem('randomMeals')) || []
    if (savedMeals.length > 0) {
      setMeals(savedMeals)
    } else {
      fetchRandomMeals()
    }
  }, [])

  // Scroll to Featured Today when navigating with hash (e.g. from footer "Random Meal")
  useEffect(() => {
    if (location.hash === '#featured-today' || window.location.hash === '#featured-today') {
      const timer = setTimeout(() => {
        document.getElementById('featured-today')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [location])

  return (
    <div> 
      <div>
        <div className='logo flex flex-col items-center justify-center mt-15'>
          <ChefHat className="md:w-18 md:h-18 w-13 h-13 text-amber-800" />
          <h2 className='text-amber-800 md:text-7xl text-5xl mt-6 font-bold'>Foodi Finder</h2>
          <p className='text-amber-600 md:text-xl font-light mt-6 md:w-[60%] w-[80%] mx-auto text-center'>Discover delicious meals from around the world. Search by ingredient, browse categories, or find your next favorite dish from our collection of thousands of recipes!</p>
        </div>
        <div className='forms flex flex-col items-center md:justify-center mt-6 mb-6'>
          <form className='relative flex flex-col md:flex-row items-stretch md:items-center w-[90%] md:w-auto mx-auto gap-2 md:justify-center'>
            <div className="relative w-full md:w-auto md:mx">
              <Search className='absolute left-3 top-1/2 -translate-y-1/2 text-amber-500' />
              <input type="text" placeholder='Search for recipes...' className='border-2 border-gray-400 rounded-md pl-10 pr-3 py-1 md:w-96 w-full focus:outline-amber-500'/>
            </div>
            <select className='border-2 border-gray-400 w-full md:w-40 rounded-md px-2 py-1 md:ml-2 focus:outline-amber-500'>
              <option value="Name">By Name</option>
              <option value="Ingredient">By Ingredient</option>
            </select>
            <button type='submit' className='bg-gray-500 text-white rounded-md w-full md:w-auto px-4 py-1 md:ml-2 hover:bg-amber-600'>Search</button>
          </form>
        </div>
        <div className='quick-search flex items-center justify-center gap-2 mb-6 flex-wrap'>
          <p className='text-amber-700 font-medium mb-2 text-sm py-1'>Quick Search:</p>
          <Link to="/category/Chicken" className='bg-orange-100 rounded-lg text-sm px-2 py-1 hover:bg-amber-600 hover:text-white transition-colors'>Chicken</Link>
          <Link to="/category/Beef" className='bg-orange-100 rounded-lg text-sm px-2 py-1 hover:bg-amber-600 hover:text-white transition-colors'>Beef</Link>
          <Link to="/category/Vegetarian" className='bg-orange-100 rounded-lg text-sm px-2 py-1 hover:bg-amber-600 hover:text-white transition-colors'>Vegetarian</Link>
          <Link to="/category/Pasta" className='bg-orange-100 rounded-lg text-sm px-2 py-1 hover:bg-amber-600 hover:text-white transition-colors'>Pasta</Link>
          <Link to="/category/Dessert" className='bg-orange-100 rounded-lg text-sm px-2 py-1 hover:bg-amber-600 hover:text-white transition-colors'>Dessert</Link>
        </div>
      </div>
      <div className='grid md:grid-cols-3 gap-3 grid-cols-1 w-[90%] md:w-[60%] mx-auto justify-items-center mb-8 mt-8'>
        <DescCard title="1000+ recipes" description="from around the world" logo={<Search />} bgColor="bg-orange-300"/>
        <DescCard title="25+ countries" description="International cuisine" logo={<Globe />} bgColor="bg-pink-200"/>
        <DescCard title="step-by-step" description="Detailed Instructions" logo={<Clock />} bgColor="bg-purple-200"/>
      </div>
      <div className='md:w-[25%] w-[75%]  mx-auto grid grid:cols-1 md:grid-cols-2 gap-3  mb-8'>
        <button onClick={fetchRandomMeals} disabled={loading} className='flex gap-1 py-2 px-2 rounded-md bg-orange-500 text-white hover:cursor-pointer justify-center hover:bg-amber-600 disabled:opacity-50'>
          <ForkKnife/>
          <span>{loading ? 'Loading...' : 'Surprise Me!'}</span>
        </button>
        <button onClick={() => navigate('/Favourite')} className='flex gap-1 px-2 py-2 rounded-md border-2 border-orange-400 text-orange-400 justify-center hover:bg-orange-500 hover:text-white hover:cursor-pointer'>
          <Star/>
          <span>My favorite</span>
        </button>
      </div>

      <div id="featured-today" className="flex items-center gap-3 w-full md:w-[95%] lg:w-[98%] mx-auto mt-8 mb-4">
        <TrendingUp className="text-amber-700 font-bold" />
        <h3 className="text-4xl font-bold text-amber-800">Featured Today</h3>
      </div>

      <div className='mb-8 mt-5 w-[95%] md:w-[95%] lg:w-[98%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-8 items-stretch auto-rows-fr justify-items-stretch'>
        {loading && <div className="col-span-full flex justify-center"><Loader2 className="animate-spin text-amber-600" size={32} /></div>}
        {error && <p className="col-span-full text-center text-red-500">{error}</p>}
        {!loading && meals.length > 0 && meals.map(meal => (
          <div key={meal.idMeal} className="w-full p-2 box-border h-full">
            <RecipeCard title={meal.strMeal} category={meal.strCategory} country={meal.strArea} image={meal.strMealThumb} id={meal.idMeal} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
