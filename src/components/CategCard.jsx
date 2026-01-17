import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategCard = ({ name, image }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/category/${name}`)
  }

  return (
    <div className="group w-full bg-white rounded-xl shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer relative z-0 hover:z-10 flex flex-col h-full min-h-[320px]" onClick={handleClick}>
      <div className="relative h-48 md:h-56 lg:h-64 w-full overflow-hidden bg-gray-100">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-500" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-xl text-amber-900 text-center">{name}</h3>
      </div>
    </div>
  )
}

export default CategCard
