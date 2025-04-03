import React from 'react'
import { useLocation } from 'react-router-dom'
import BlogsComp from './../components/BlogsComp.jsx';
import AOS from "aos";
import "aos/dist/aos.css";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const BlogsDetails = () => {

  React.useEffect(() => {
      AOS.init({ duration: 1000 });
      AOS.refresh();
      window.scrollTo(0,0);
  }, []);

  const location = useLocation();
  console.log(location, "useLocation")
  const { props } = location.state;

  return (
    <div className='min-h-[550px] bg-gray-50 pt-20'>
       <div className='h-[350px] overflow-hidden'>
          <img src={props.image} alt="" className='mx-auto h-[350px] w-full object-cover transition duration-700 hover:scale-105' />
       </div>
       <div className='container mt-6'>
        <p className='text-slate-600 py-3'>
          written by {props.author} on {props.date}
        </p>
        <h1 className='text-3xl font-semibold mb-10'>{props.title}</h1>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{props.description}</ReactMarkdown>
       </div>
       <BlogsComp/>
    </div>
  )
}

export default BlogsDetails
