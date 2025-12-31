import React from 'react'
import {Outlet} from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <main className="flex-1">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default RootLayout
