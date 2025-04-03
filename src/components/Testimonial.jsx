import React from 'react'
import Slider from 'react-slick'
import { TestimonialData } from '../TestimonialData'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Testimonial = () => {


    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
          {
            breakpoint: 2560, // Adjusted to handle ultra-wide screens
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024, // Tablets & small desktops
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              // Removed `initialSlide: 2` unless you need it
            },
          },
          {
            breakpoint: 768, // Mobile
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      

  return (
    <div className='py-14 pb-16 sm:pb-20'>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-12 max-w-[400px] mx-auto'>
            
            <h1 className='text-3xl font-bold text-emerald-600'>Testimonials</h1>
            <p className='text-gray-600 py-4'>
                {" "}
                Discover what our satisfied customers have to say about their experiences. Read heartfelt testimonials that showcase trust, quality, and excellence in our services
            </p>
        </div>
        {/* testimonial section */}
            <Slider {...settings}>
                {
                    TestimonialData.map((item) => {
                        return (
                            <div key={item.id} className='my-6'>
                            <div className='flex flex-col justify-center items-center gap-5 text-center shadow-lg p-4 mx-4 rounded-xl bg-emerald-300/20 relative'>
                                <img src={item.img} alt="" className='rounded-full block mx-auto' />
                                <h1 className='text-xl font-bold'>{item.name}</h1>
                                <p className='text-gray-600 line-clamp-3 text-[15px] leading-[1.5rem]'>{item.text}</p>
                                <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                            </div>
                            </div>
                        )
                    })
                }
            </Slider>
      </div>
    </div>
  )
}

export default Testimonial
