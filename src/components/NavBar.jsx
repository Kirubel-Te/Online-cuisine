import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ChefHat, Home, Menu, Heart, Globe, X } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom';

const AREAS_API = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list';

const NavBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const [areas, setAreas] = useState([]);
  const countriesRefDesktop = useRef(null);
  const countriesRefMobile = useRef(null);

  const handleAreaSelect = (area) => {
    setCountriesOpen(false);
    setOpen(false);
    navigate(`/country/${encodeURIComponent(area)}`);
  };

  useEffect(() => {
    fetch(AREAS_API)
      .then((res) => res.json())
      .then((data) => {
        if (data?.meals) setAreas(data.meals.map((m) => m.strArea).sort());
      })
      .catch(() => setAreas([]));
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const inside =
        countriesRefDesktop.current?.contains(e.target) ||
        countriesRefMobile.current?.contains(e.target);
      if (!inside) setCountriesOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const CountriesButton = ({ inMobile, buttonRef }) => (
    <div className="relative" ref={buttonRef}>
      <button
        type="button"
        onClick={() => setCountriesOpen((prev) => !prev)}
        className={`flex gap-2 hover:bg-amber-100 rounded-lg py-2 px-3 cursor-pointer items-center w-full ${inMobile ? 'text-left' : ''}`}
        aria-expanded={countriesOpen}
        aria-haspopup="listbox"
      >
        <Globe width={19} />
        Countries
      </button>
      {countriesOpen && (
        <ul
          role="listbox"
          className="absolute left-0 top-full mt-1 min-w-[180px] max-h-64 overflow-y-auto bg-white border border-amber-200 rounded-lg shadow-lg py-1 z-50"
        >
          {areas.length === 0 ? (
            <li className="px-3 py-2 text-amber-700 text-sm">Loading…</li>
          ) : (
            areas.map((area) => (
              <li
                key={area}
                role="option"
                className="px-3 py-2 hover:bg-amber-100 cursor-pointer text-amber-900 text-sm"
                onClick={() => handleAreaSelect(area)}
              >
                {area}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );

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
            <li><CountriesButton buttonRef={countriesRefDesktop} /></li>
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
                <li><CountriesButton inMobile buttonRef={countriesRefMobile} /></li>
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
