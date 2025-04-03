import React from 'react'
import NatureVid1 from './../assets/bgVideo3.mp4';
import NatureVid2 from './../assets/bgVideo4.mp4';
import NatureVid3 from './../assets/bgVideo5.mp4';
import Hero from '../components/Hero';
import Places from '../components/Places';
import BannerImg from '../components/BannerImg';
import Banner from '../components/Banner';
import BanImg from './../assets/bannerO.webp';
import Testimonial from '../components/Testimonial';
import BlogsComp from '../components/BlogsComp';
import AOS from "aos";
import "aos/dist/aos.css";

const Home = (props) => {

  const videos = [NatureVid1, NatureVid2, NatureVid3];
  const randomIndex = Math.floor(Math.random() * videos.length);
  const randomVideo = videos[randomIndex];

  React.useEffect(() => {
    AOS.init({ 
        duration: 1000,
        once:true });
    AOS.refresh(); 
  }, []);

  return (
    <>
      <div>
        <div className='h-[700px]'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]'
          >
            <source src={randomVideo} type="video/mp4" />
          </video>
          <Hero/>
        </div>
        <Places handleOrderPopup={props.handleOrderPopup}/>
        <BannerImg img={BanImg}/>
        <BlogsComp/>
        <Banner/>
        <Testimonial/>
      </div>
    </>
  )
}

export default Home
