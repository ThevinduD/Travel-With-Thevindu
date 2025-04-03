import React from 'react'
import TravelBag from './../assets/travelBag.png';
import { MdFlight, MdOutlineLocalHotel } from 'react-icons/md';
import { IoIosWifi } from 'react-icons/io';
import { IoFastFoodSharp } from 'react-icons/io5';

const Banner = () => {
  return (
    <div className='min-h-[500px] bg-gray-50 pb-10'>
        <div className='min-h-[500px] flex justify-center items-center backdrop-blur-xl py-5 md:py-12 sm:py-0 px-2'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6
                items-center'>
                    {/* image section */}
                    <div>
                        <img loading='lazy' data-aos="flip-up" src={TravelBag} alt="" className='max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover' />
                    </div>
                    {/* text section */}
                    <div>
                        <h1 
                            data-aos="fade-up"
                            className='text-3xl font-bold sm:text-4xl'
                        >
                            Explore all corners of the world with us
                        </h1>
                        <p data-aos="fade-up" className='text-base text-gray-600 tracking-normal leading-7 my-7'>Fly with us as we craft unforgettable experiences with seamless flights, luxurious hotels, and exquisite meals, ensuring every moment of your journey is effortlessly perfect and tailored to your dreams. Let us handle the details!</p>

                        <div data-aos="zoom-in" className='grid grid-cols-2 gap-6'>
                            <div className='space-y-6'>
                                <div className="flex items-center gap-4">
                                    <MdFlight className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-300'/>
                                    <p>Flight</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <MdOutlineLocalHotel className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-300'/>
                                    <p>Hotel</p>
                                </div>
                            </div>
                            <div className='space-y-6'>
                                <div className="flex items-center gap-4">
                                    <IoIosWifi className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-emerald-300'/>
                                    <p>Wi-Fi</p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <IoFastFoodSharp className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-pink-300'/>
                                    <p>Foods</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
