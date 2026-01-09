import React from 'react'
import { ChefHat, Clock, ForkKnife, Globe, Star, Watch } from 'lucide-react'
import { Search } from 'lucide-react'
import DescCard from '../components/DescCard'

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
              <input type="text" placeholder='Search for recipes...' className='border-2 border-gray-400 rounded-md pl-10 pr-3 py-1 md:w-96 w-full focus:outline-amber-500'/>
            </div>
            <select className='border-2 border-gray-400 w-full md:w-40 rounded-md px-2 py-1 md:ml-2 focus:outline-amber-500'>
              <option value="Name">By Name</option>
              <option value="Ingredient">By Ingredient</option>
            </select>
            <button type='submit' className='bg-gray-500 text-white rounded-md w-full md:w-auto px-4 py-1 md:ml-2 hover:bg-amber-600'>Search</button>
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
      <div className='grid md:grid-cols-3 gap-3 grid-cols-1 w-[90%] md:w-[60%] mx-auto justify-items-center mb-8 mt-8'>
        <DescCard title="1000+ recipes" description="from around the world" logo={<Search />} bgColor="bg-orange-300"/>
        <DescCard title="25+ countries" description="International cuisine" logo={<Globe />} bgColor="bg-pink-200"/>
        <DescCard title="step-by-step" description="Detailed Instructions" logo={<Clock />} bgColor="bg-purple-200"/>
      </div>
      <div className='md:w-[25%] w-[75%]  mx-auto grid grid:cols-1 md:grid-cols-2 gap-3  mb-8'>
        <button className='flex gap-1 py-2 px-2 rounded-md bg-orange-500 text-white hover:cursor-pointer justify-center hover:bg-amber-600'>
          <ForkKnife/>
          <span>Suprise Me!</span>
        </button>
        <button className='flex gap-1 px-2 py-2 rounded-md border-2 border-orange-400 text-orange-400 justify-center hover:bg-orange-500 hover:text-white hover:cursor-pointer'>
          <Star/>
          <span>My favorite</span>
        </button>
      </div>
    </div>
  )
}

export default Home
