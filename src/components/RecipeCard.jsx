import React from 'react'
import { Tag, MapPin, ForkKnife, Heart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useFavourites } from '../contexts/FavouritesContext'

const RecipeCard = ({ title, category, country, image, id }) => {
  const navigate = useNavigate()
  const { toggleFavourite, isFavourite } = useFavourites()

  return (
    <div className="group w-full bg-white rounded-xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer relative z-0 hover:z-10 flex flex-col h-full min-h-[420px]">
      <div className="relative h-48 md:h-56 lg:h-64 w-full overflow-hidden bg-gray-100">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-xl text-amber-900">{title}</h3>

        <div className="flex items-center gap-2 mt-3">
          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 text-xs rounded-full px-2 py-1">
            <Tag size={14} className="text-amber-600" />
            <span className="whitespace-nowrap">{category}</span>
          </span>

          {country && (
            <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 text-xs rounded-full px-2 py-1">
              <MapPin size={14} className="text-gray-600" />
              <span className="whitespace-nowrap">{country}</span>
            </span>
          )}

          <div className="ml-auto">
            <Heart
              size={16}
              className={`cursor-pointer ${isFavourite(id) ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
              onClick={() => toggleFavourite(id)}
            />
          </div>
        </div>

        <div className="mt-auto">
          <button onClick={() => navigate(`/recipe/${id}`)} className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-md bg-orange-500 text-white text-sm hover:bg-amber-600 transition-colors duration-200">
            <ForkKnife size={16} />
            <span>View Recipe</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard
