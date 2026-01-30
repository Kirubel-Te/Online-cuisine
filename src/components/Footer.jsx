import { ChefHat } from 'lucide-react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const RandomMealLink = () => {
  const location = useLocation()
  const handleClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault()
      document.getElementById('featured-today')?.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <Link
      to={{ pathname: '/', hash: 'featured-today' }}
      onClick={handleClick}
      className="text-amber-200 hover:text-amber-300 transition-colors"
    >
      Random Meal
    </Link>
  )
}

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-white py-8 mt-auto">
      <div className=" mx-auto px-4 md:grid md:grid-cols-4 md:gap-8 md:w-full">
        
          <div>
            <div className="flex items-center gap-3">
              <ChefHat className="w-10 h-10" />
              <h2 className="text-xl font-semibold">Foodi Finder</h2>
            </div>

            <div className="mt-5  text-amber-200">
              <p>Discover, cook, and share delicious recipes from around the world. Our mission is to make cooking accessible and enjoyable for everyone.</p>
            </div>

            <div className="logos">
              <ul className="flex gap-4">
                <li>
                  <a href="#" aria-label="Facebook" className="p-2 rounded hover:text-amber-800 transition">
                    <FaFacebookF className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Twitter" className="p-2 rounded hover:text-amber-800 transition">
                    <FaTwitter className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="Instagram" className="p-2 rounded hover:text-amber-800 transition">
                    <FaInstagram className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a href="#" aria-label="YouTube" className="p-2 rounded hover:text-amber-800 transition">
                    <FaYoutube className="w-5 h-5" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="quick-access mt-8 md:mt-0">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-3">Quick Links</h2>
            <ul className="space-y-2 ">
              <li>
                <Link to="/" className="text-amber-200 hover:text-amber-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/Categories" className="text-amber-200 hover:text-amber-300 transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/Favourite" className="text-amber-200 hover:text-amber-300 transition-colors">Favorites</Link>
              </li>
              <li>
                <RandomMealLink />
              </li>
            </ul>
          </div>

          <div className="popular-categories mt-8 md:mt-0">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-3">Popular Categories</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/category/Dessert" className="text-amber-200 hover:text-amber-300 transition-colors">Dessert</Link>
              </li>
              <li>
                <Link to="/category/Vegetarian" className="text-amber-200 hover:text-amber-300 transition-colors">Vegetarian</Link>
              </li>
              <li>
                <Link to="/category/Chicken" className="text-amber-200 hover:text-amber-300 transition-colors">Chicken</Link>
              </li>
              <li>
                <Link to="/category/Pasta" className="text-amber-200 hover:text-amber-300 transition-colors">Pasta</Link>
              </li>
              <li>
                <Link to="/Categories" className="text-amber-200 hover:text-amber-300 transition-colors">Quick Meals</Link>
              </li>
            </ul>
          </div>
        

        
        <div className='mt-8 md:mt-0'>
            <h2 className="text-white text-xl md:text-2xl font-bold mb-3">Newsletter</h2>
            <p className='mt-5 mb-5 text-amber-200'>Subscribe to get weekly recipe inspiration and cooking tips!</p>
            <div>
                <form>
                    <input placeholder='Your email' className='bg-amber-800 w-full h-10 rounded-lg pl-3 mb-4'/>
                    <button className='bg-amber-500  w-full h-10 rounded-lg cursor-pointer text-lg '>Subscribe</button>
                </form>
            </div>
        </div>
      </div>
      <hr className='text-amber-400 w-3/4 mx-auto mb-8 mt-8'/>
      <div className=" md:grid md:grid-cols-2 md:justify-between px-4">
          <p className="text-sm text-amber-600 opacity-80 text-center md:mt-0 md:text-left mt-12">© {new Date().getFullYear()} Foodi Finder. All rights reserved.</p>
          <div className='policies text-sm  cursor-pointer text-center w-3/5 mx-auto md:mx-0 md:w-auto md:justify-self-end'>
            <ul className='flex md:gap-8 justify-around  text-amber-600'>
                <li className='opacity-80 hover:opacity-120'><a>Privacy Policy</a></li>
                <li className='opacity-80 hover:opacity-120'><a>Terms of Service</a></li>
                <li className='opacity-80 hover:opacity-120'><a>Contact Us</a></li>
            </ul>
          </div>
          
        </div>
    </footer>
  )
}

export default Footer
