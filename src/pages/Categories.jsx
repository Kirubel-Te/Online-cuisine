import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Tag, Loader2 } from 'lucide-react'
import CategCard from '../components/CategCard'

const Categories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchCategories = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      setCategories(response.data.categories)
    } catch (err) {
      setError('Failed to fetch categories')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="w-full md:w-[95%] lg:w-[98%] mx-auto mt-8 mb-8">
      <div className="flex items-center gap-3 p-3 mb-4">
        <Tag className="text-amber-700" />
        <h2 className="lg:text-4xl text-2xl font-bold text-amber-800">Recipe Categories</h2>
      </div>
      <p className="text-amber-600 md:text-xl px-3 font-light mb-8">
        Browse recipes by category and discover new flavours and cooking styles.
      </p>

      <div className='mb-8 mt-5 w-[95%] md:w-[95%] lg:w-[98%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-8 items-stretch auto-rows-fr justify-items-stretch'>
        {loading && <div className="col-span-full flex justify-center"><Loader2 className="animate-spin text-amber-600" size={32} /></div>}
        {error && <p className="col-span-full text-center text-red-500">{error}</p>}
        {!loading && categories.length > 0 && categories.map(category => (
          <div key={category.idCategory} className="w-full p-2 box-border h-full">
            <CategCard name={category.strCategory} image={category.strCategoryThumb} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
