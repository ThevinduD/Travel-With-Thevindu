import React from 'react'
import Places from '../components/Places'

const PlacesRoute = (props) => {
  
  return (
    <div className='pt-20'>
      <Places handleOrderPopup={props.handleOrderPopup}/>
    </div>
  )
}

export default PlacesRoute
