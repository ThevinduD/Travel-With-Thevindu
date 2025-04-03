import React from 'react'

const BannerImg = ({img}) => {
  const bgImage = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
  
  return (
    <div data-aos="zoom-in" className='h-[400px] lg:h-[450px] w-full' style={bgImage}>
    </div>
  )
}

export default BannerImg
