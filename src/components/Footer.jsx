import React from 'react'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaLocationArrow,  } from 'react-icons/fa';
import NatureVid1 from './../assets/bgVideo3.mp4';
import NatureVid2 from './../assets/bgVideo4.mp4';
import NatureVid3 from './../assets/bgVideo5.mp4';
import { Link } from 'react-router-dom';
import Logo from './../assets/Logo2.webp';


const FooterLinks = [
  {
    title: "Home",
    link: "/"
  },
  {
    title: "About",
    link: "/about"
  },
  {
    title: "Best Places",
    link: "/best-places"
  },
  {
    title: "Blogs",
    link: "/blogs"
  },
]

const Footer = () => {

  const videos = [NatureVid1, NatureVid2, NatureVid3];
  const randomIndex = Math.floor(Math.random() * videos.length);
  const randomVideo = videos[randomIndex];

  return (
    <div className='py-10 relative overflow-hidden'>
      <video
            autoPlay
            loop
            muted
            playsInline 
            className='absolute right-0 top-0 h-full w-full object-cover overflow-hidden z-[-1]'
          >
            <source src={randomVideo} type="video/mp4" />
      </video>
      <div className='container'>
        <div className='grid md:grid-cols-3 py-5 bg-white/60 backdrop-blur-sm rounded-t-xl'>
          <div className='py-8 px-4 text-center'>
            <h1 className='flex items-center justify-center gap-3 text-xl sm:text-3xl font-bold'>
              <img loading='lazy' src={Logo} alt="" className='max-h-[150px] rounded-lg'/>
            </h1>
            <p className='text-sm text-gray-900 mt-4 leading-6 tracking-wide px-2 md:px-0'>
            Fly with us as we craft unforgettable experiences with seamless flights, luxurious hotels, and exquisite meals, ensuring every moment of your journey is effortlessly perfect and tailored to your dreams. Let us handle the details!.
            </p>
            <br />
            <div className='flex items-center justify-center gap-3 mt-3'>
              <FaLocationArrow/>
              <p>Colombo, Sri Lanka</p>
            </div>
            <div className='flex items-center justify-center gap-3 mt-3'>
              <FaEnvelope/>
              <p>thevindund@gmail.com</p>
            </div>
            {/* social handles */}
            <div className='flex justify-center'>
                <div className='flex items-center gap-3 mt-6'>
                  <a href="https://www.linkedin.com/in/thevindu-dehigaspitiya" target='_blank'>
                    <FaInstagram className='text-2xl hover:text-emerald-500'/>
                  </a>
                  <a href="https://www.linkedin.com/in/thevindu-dehigaspitiya" target='_blank'>
                    <FaGithub className='text-2xl hover:text-emerald-500'/>
                  </a>
                  <a href="https://www.linkedin.com/in/thevindu-dehigaspitiya" target='_blank'>
                    <FaLinkedin className='text-2xl hover:text-emerald-500'/>
                  </a>
                </div>
            </div>
          </div>
          {/* footer links */}
          <div className='grid grid-cols-2 col-span-2 md:pl-10'>
            {/* first col links */}
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
              <ul className='flex flex-col gap-3'>
                {
                  FooterLinks.map((item) => (
                    <li className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-black space-x-1 text-gray-700'>
                        <Link to={item.link} onClick={() => {
                          window.scrollTo(0,0);
                        }}> 
                          <span>&#11162;</span>
                          <span>{item.title}</span>
                        </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            {/* second col links */}
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Important Links</h1>
              <ul className='flex flex-col gap-3'>
                {
                  FooterLinks.map((item) => (
                    <li className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-black space-x-1 text-gray-700'>
                        <Link to={item.link} onClick={() => {
                          window.scrollTo(0,0);
                        }}> 
                          <span>&#11162;</span>
                          <span>{item.title}</span>
                        </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
        {/* final section */}
        <div>
                <div className='text-center py-4 border-t-2 border-gray-300/50 bg-secondary'>
                    <h1>@copyright 2024 All rights reserved || Digital creation by Thevindu 🚀</h1>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
