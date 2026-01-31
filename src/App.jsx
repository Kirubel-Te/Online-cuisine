import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout' 
import Home from './pages/Home'
import Categories from './pages/Categories'
import Favourite from './pages/Favourite'
import CategoryDetail from './pages/CategoryDetail'
import RecipeDetail from './pages/RecipeDetail'
import SearchResults from './pages/SearchResults'
import NotFound from './pages/NotFound'
import { FavouritesProvider } from './contexts/FavouritesContext'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='Categories' element={<Categories/>} />
        <Route path='category/:categoryName' element={<CategoryDetail/>}/>
        <Route path='recipe/:id' element={<RecipeDetail/>}/>
        <Route path='search' element={<SearchResults/>}/>
        <Route path='Favourite' element={<Favourite/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <FavouritesProvider>
      <RouterProvider router={router}/>
    </FavouritesProvider>
  )
}

export default App
