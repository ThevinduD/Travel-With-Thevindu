import React, { useState } from 'react'

const Hero = () => {

  const [priceValue, setPriceValue] = useState(500)

  return (
    <div className='bg-black/20 h-full'>
      <div className='h-full flex justify-center items-center py-4 px-2'>
        <div className='container grid grid-cols-1 gap-4 '>
            <div className='text-white'>
                <p data-aos = "fade-up">Our packages</p>
                <p
                    data-aos = "fade-up"
                    data-aos-delay = "300"
                    className='font-bold text-2xl sm:text-3xl'
                >
                    Search Your Destination
                </p>
            </div>
            {/* Form section */}
            <div data-aos = "fade-up" data-aos-delay = "600" className='space-y-4 bg-white rounded-md p-4 relative'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-3'>

                    <div>
                        <label htmlFor="destination" className='opacity-70'>
                            Search your Destination
                        </label>
                        <input 
                            type="text" 
                            name='destination'
                            id='destination'
                            placeholder='Sri Lanka'
                            className='w-full bg-gray-200 my-2 range accent-emerald-300 focus:outline-emerald-300 outline-2 rounded-full p-2 px-3'
                        />
                    </div>

                    <div>
                        <label htmlFor="date" className='opacity-70'>
                            Date
                        </label>
                        <input 
                            type="date" 
                            name='date'
                            id='date'
                            className='w-full !placeholder-slate-400 bg-gray-200 my-2 focus:outline-emerald-300 outline-2 rounded-full p-2 px-3'
                        />
                    </div>

                    <div>
                        <label htmlFor="price" className='opacity-70 block'>
                            <div className='w-full flex justify-between items-center'>
                                <p>Max Price</p>
                                <p className='font-bold text-xl'>$ {priceValue}</p>
                            </div>
                        </label>
                        <div className='bg-gray-100 rounded-full p-2 flex items-center justify-center my-1'>
                            <input 
                                type="range" 
                                name='price'
                                id='price'
                                className='appearance-none w-full bg-gradient-to-r from-secondary to-emerald-400 h-3 rounded-full my-2'
                                min="150"
                                max="1000"
                                value={priceValue}
                                step="10"
                                onChange={(e) => setPriceValue(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                {/* Button Section */}
                <button className='bg-gradient-to-r from-secondary to-emerald-300 hover:scale-105 px-5 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2 font-semibold'>
                    Search Now
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
