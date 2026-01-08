import React from 'react'
import { ChefHat } from 'lucide-react'
import { Search } from 'lucide-react'

const Home = () => {
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
              <input type="text" placeholder='Search for recipes...' className='border-2 border-amber-400 rounded-md pl-10 pr-3 py-1 md:w-96 w-full focus:outline-amber-500'/>
            </div>
            <select className='border-2 border-amber-400 w-full md:w-40 rounded-md px-2 py-1 md:ml-2 focus:outline-amber-500'>
              <option value="Name">By Name</option>
              <option value="Ingredient">By Ingredient</option>
            </select>
            <button type='submit' className='bg-amber-500 text-white rounded-md w-full md:w-auto px-4 py-1 md:ml-2 hover:bg-amber-600'>Search</button>
          </form>
        </div>
        <div className='quick-search flex items-center  justify-center gap-2 mb-6'>
          <p className='text-amber-700 font-medium mb-2 text-sm py-1'>Quick Search:</p>
          <button className='bg-orange-100 rounded-lg text-sm px-2 py-1 hover:bg-amber-600 hover:text-white'>Chicken</button>
          <button className='bg-orange-100 rounded-lg text-sm px-2 py-1 hover:bg-amber-600 hover:text-white'>Beef</button>
          <button className='bg-orange-100 rounded-lg text-sm px-2 py-1 hover:bg-amber-600 hover:text-white'>Vegetarian</button>
          <button className='bg-orange-100 rounded-lg text-sm px-2 py-1 hover:bg-amber-600 hover:text-white'>Pasta</button>
          <button className='bg-orange-100 rounded-lg text-sm px-2 py-1 hover:bg-amber-600 hover:text-white'>Dessert</button>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Home
