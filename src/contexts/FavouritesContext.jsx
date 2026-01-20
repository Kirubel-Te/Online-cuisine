import React, { createContext, useContext, useState, useEffect } from 'react'

const FavouritesContext = createContext()

export const useFavourites = () => {
  const context = useContext(FavouritesContext)
  if (!context) {
    throw new Error('useFavourites must be used within a FavouritesProvider')
  }
  return context
}

export const FavouritesProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favourites') || '[]')
    setFavourites(stored)
  }, [])

  const toggleFavourite = (id) => {
    setFavourites(prev => {
      const newFavs = prev.includes(id) 
        ? prev.filter(fav => fav !== id) 
        : [...prev, id]
      localStorage.setItem('favourites', JSON.stringify(newFavs))
      return newFavs
    })
  }

  const isFavourite = (id) => favourites.includes(id)

  return (
    <FavouritesContext.Provider value={{ favourites, toggleFavourite, isFavourite }}>
      {children}
    </FavouritesContext.Provider>
  )
}