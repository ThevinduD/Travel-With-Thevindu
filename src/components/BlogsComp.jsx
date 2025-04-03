import React from 'react'
import { BlogsData } from '../BlogsData'
import BlogsCard from './BlogsCard'

const BlogsComp = () => {
  return (
    <div className='bg-gray-50 py-7 sm:py-10 pb-16 sm:pb-20'>
      <div className='container' data-aos="fade-up">
        <h1 className='my-8 border-l-8 border-emerald-400/50 py-2 pl-2 text-2xl font-bold sm:text-3xl'>Our latest Blogs</h1>
        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
            {
                BlogsData.map((item, index) => (
                  <BlogsCard key={index} {...item}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default BlogsComp
