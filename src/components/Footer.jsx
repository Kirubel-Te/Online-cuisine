import { ChefHat } from 'lucide-react'
import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-amber-950 text-white py-8 mt-auto">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col gap-8">
          <div>
            <div className="flex items-center gap-3">
              <ChefHat className="w-10 h-10" />
              <h2 className="text-xl font-semibold">Foodi Finder</h2>
            </div>

            <div className="mt-5 mb-5 text-amber-200">
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

          <div className="quick-access">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-3">Quick Links</h2>
            <ul className="space-y-2 ">
              <li>
                <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors">Categories</a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors">Favorites</a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors">Random Meal</a>
              </li>
            </ul>
          </div>

          <div className="popular-categories">
            <h2 className="text-white text-xl md:text-2xl font-bold mb-3">Popular Categories</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors">Desserts</a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors">Vegetarian</a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors">Chicken</a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors">Pasta</a>
              </li>
              <li>
                <a href="#" className="text-amber-200 hover:text-amber-300 transition-colors">Quick Meals</a>
              </li>
            </ul>
          </div>
        </div>

        
        <div className='mt-5'>
            <h2 className="text-white text-xl md:text-2xl font-bold mb-3">Newsletter</h2>
            <p className='mt-5 mb-5 text-amber-200'>Subscribe to get weekly recipe inspiration and cooking tips!</p>
            <div>
                <form>
                    <input placeholder='Your email' className='bg-amber-800 w-full h-10 rounded-lg pl-3 mb-4'/>
                    <button className='bg-amber-500  w-full h-10 rounded-lg text-lg '>Subscribe</button>
                </form>
            </div>
        </div>
      </div>
      <div className="mt-8">
        <hr className='text-amber-400 w-3/4 mx-auto mb-8'/>
        <div className='text-center w-3/5 mx-auto'>
            <ul className='flex justify-around text-amber-600'>
                <li><a>Privacy Policy</a></li>
                <li><a>Terms of Service</a></li>
                <li><a>Contact Us</a></li>
            </ul>
          </div>
          <p className="text-sm text-amber-600 opacity-80 text-center mt-12">© {new Date().getFullYear()} Foodi Finder. All rights reserved.</p>
          
        </div>
    </footer>
  )
}

export default Footer
