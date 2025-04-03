import React from 'react'
import { PlacesData } from '../PlacesData'
import PlacesCard from './PlacesCard'

const Places = (props) => {
  return (
    <div className='bg-gray-50 py-7 sm:py-10 pb-16 sm:pb-20'>
      <div className='container'>
        <h1 className='my-8 border-l-8 border-emerald-400/50 py-2 pl-2 text-2xl font-bold sm:text-3xl'>Best Places to visit</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                PlacesData.map((item, index) => (
                    <PlacesCard handleOrderPopup={props.handleOrderPopup} key={index} {...item} />
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default Places
