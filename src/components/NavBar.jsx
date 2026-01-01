import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { ChefHat, Home, Menu, Heart, Globe, Shuffle, X } from 'lucide-react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex justify-between py-2 border-b border-amber-400 bg-white/30 backdrop-blur-md backdrop-saturate-150 sticky top-0 z-30'>
      <div className='left-side flex items-center gap-0.5 pl-2'>
        <div className='logo inline-flex items-center'>
            <ChefHat className="w-10 h-10 text-amber-800" />
        </div>
        <div className='Description'>
            <p className='text-xl font-bold text-amber-950 '>Foodie Finder</p>
            <p className='text-amber-700 font-light text-sm'>Discorver World Cusine</p>
        </div>
      </div>

      <div className='right text-amber-800 pr-2 py-2 font-light flex items-center'>
        <button className='md:hidden p-2 cursor-pointer' aria-label='Open menu' onClick={() => setOpen(true)}>
          <Menu width={22} />
        </button>

        {/* Desktop menu (visible on md and up) */}
        <div className="hidden md:flex md:items-center md:ml-4 md:w-auto">
          <ul className='flex gap-3 items-center'>
            <NavLink className={({isActive})=> isActive?'bg-amber-200 rounded-lg':undefined} to={'/'}><li className='flex gap-2 hover:bg-amber-100 rounded-lg py-2 px-3 cursor-pointer items-center'><Home width={20}/>Home</li></NavLink>
            <NavLink className={({isActive})=>isActive?'bg-amber-200 rounded-lg':undefined} to={'/Favourite'}><li className='flex gap-2 hover:bg-amber-100 rounded-lg py-2 px-3 cursor-pointer items-center'><Heart width={20}/>Favourite</li></NavLink>
            <NavLink className={({isActive})=>isActive?'bg-amber-200 rounded-lg':undefined} to={'/Categories'}><li className='flex gap-2 hover:bg-amber-100 rounded-lg py-2 px-3 cursor-pointer items-center'><Menu width={19}/>Categories</li></NavLink>
            <NavLink  to={'#'}><li className='flex gap-2 cursor-pointer hover:bg-amber-100 rounded-lg py-2 px-3 items-center'><Globe width={19}/>Countries</li></NavLink>
            <NavLink to={'#'}><li className='flex border-2 cursor-pointer border-amber-500 rounded-md  py-1 gap-2 px-2 hover:bg-amber-100 items-center'><Shuffle width={20}/>Random</li></NavLink>
          </ul>
        </div>

        {/* Mobile overlay rendered in a portal to avoid being clipped by navbar's backdrop */}
        {createPortal(
          <div className={`${open ? 'pointer-events-auto' : 'pointer-events-none'} fixed inset-0 z-50 md:hidden`} aria-hidden={!open}>
            <div className={`${open ? 'opacity-100' : 'opacity-0'} absolute inset-0 bg-black/40 transition-opacity duration-200`} onClick={() => setOpen(false)} />

            <div className={`absolute z-60 inset-y-0 right-0 w-72 bg-white p-4 shadow-lg transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
              <div className='flex items-center justify-between mb-3'>
                <p className='font-bold'>Menu</p>
                <button className='cursor-pointer' aria-label='Close menu' onClick={() => setOpen(false)}><X/></button>
              </div>

              <ul className='flex flex-col gap-3'>
                <NavLink className={({isActive})=> isActive?'bg-amber-200 rounded-lg':undefined} to={'/'}><li className='flex gap-2 hover:bg-amber-100 rounded-lg py-2 px-3 cursor-pointer items-center'><Home width={20}/>Home</li></NavLink>
                <NavLink className={({isActive})=>isActive?'bg-amber-200 rounded-lg':undefined} to={'/Favourite'}><li className='flex gap-2 hover:bg-amber-100 rounded-lg py-2 px-3 cursor-pointer items-center'><Heart width={20}/>Favourite</li></NavLink>
                <NavLink className={({isActive})=>isActive?'bg-amber-200 rounded-lg':undefined} to={'/Categories'}><li className='flex gap-2 hover:bg-amber-100 rounded-lg py-2 px-3 cursor-pointer items-center'><Menu width={19}/>Categories</li></NavLink>
                <NavLink  to={'#'}><li className='flex gap-2 cursor-pointer hover:bg-amber-100 rounded-lg py-2 px-3 items-center'><Globe width={19}/>Countries</li></NavLink>
                <NavLink to={'#'}><li className='flex border-2 cursor-pointer border-amber-500 rounded-md  py-1 gap-2 px-2 hover:bg-amber-100 items-center'><Shuffle width={20}/>Random</li></NavLink>
              </ul>
            </div>
          </div>,
          document.body
        )}
      </div>
    </div>
  )
}

export default NavBar
