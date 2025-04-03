import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'

const PlacesCard = (props) => {
  return (
    <div onClick={props.handleOrderPopup} className='shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer rounded-md bg-white'>
      <div className='overflow-hidden rounded-t-md'> 
        <img loading='lazy' className='mx-auto h-[200px] w-full object-cover transition duration-700 hover:scale-110' src={props.img} alt="" />
      </div>

      <div className='space-y-2 p-3 px-4'>
        <h1 className='line-clamp-1 font-bold text-xl'>{props.title}</h1>
        <div className='flex items-center gap-2 opacity-70'>
          <IoLocationSharp/>
          <span>{props.location}</span>
        </div>
        <p className='line-clamp-3 text-[15px] leading-[1.5rem]'>{props.description}</p>
        <div className='flex items-center justify-between border-t-2 !mt-3'>
            <div className='opacity-70 mt-2'>
              <p>{props.type}</p>
            </div>
            <div>
              <p className='text-xl font-bold text-gray-800 mt-2'>${props.price}</p>
            </div>
        </div>
      </div>

    </div>
  )
}

export default PlacesCard
