import React from 'react'
import { createBrowserRouter } from 'react-router'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <main className="flex-1">
      </main>

      <Footer/>
    </div>
  )
}

export default App
