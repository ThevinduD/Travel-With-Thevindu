import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ReactMarkdown from "react-markdown";

const BlogsCard = (props) => {
  return (
    <Link to={`/blogs/${props.title}`} onClick={() => {window.scrollTo(0,0)}} state={{props}}>
        <div className='p-4 shadow-lg transition-all duration-500 hover:shadow-xl bg-white'>
            <div className='overflow-hidden'>
                <img loading='lazy' src={props.image} alt="" className='mx-auto h-[250px] w-full object-cover transition-all duration-700 hover:scale-110'/>
            </div>
            <div className='flex justify-between pt-2 text-slate-600'>
                <p>{props.date}</p>
                <p>by {props.author}</p>
            </div>
            <div className='space-y-2 py-3'>
                <h1 className='line-clamp-1 font-bold'>{props.title}</h1>
                <p className='line-clamp-2 text-[15px] leading-[1.5rem]'><ReactMarkdown>{props.description}</ReactMarkdown></p>
            </div>
        </div>
    </Link>
  )
}

export default BlogsCard
