import React from 'react'


const DescCard = ({ title, description, logo, bgColor }) => {
  return (
    <div className={`w-full md:w-72 ${bgColor} flex flex-col items-center gap-2 rounded-lg py-7 shadow-lg text-amber-900`}>
      {logo}
      <h2 className='font-bold'>{title}</h2>
      <p className='font-light'>{description}</p>
    </div>
  )
}

export default DescCard
