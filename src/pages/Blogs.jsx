import React from 'react'
import BlogsComp from '../components/BlogsComp'
import AOS from "aos";
import "aos/dist/aos.css";

const Blogs = () => {

  React.useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
    window.scrollTo(0,0);  
  }, []);

  return (
    <div className='pt-20'>
      <BlogsComp/>
    </div>
  )
}

export default Blogs
