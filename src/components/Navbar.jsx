import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoImg from "../../src/assets/travelwithThevindu.webp"
import { FaCaretDown } from 'react-icons/fa'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

const dropdownLinks = [
  {
    name:"Our Services",
    link: "/#services"
  },
  {
    name:"Top Brands",
    link: "/#mobile_brands"
  },
  {
    name:"Location",
    link: "/#location"
  }
]


const Navbar = (props) => {

  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }


  return (
    <>
      <div className='fixed top-0 right-0 w-full bg-white text-black shadow-md z-[9999]'>
        <div className='bg-gradient-to-r from-primary to-secondary text-gray-700'>
          <div className="container py-[2px] sm:block hidden">
              <div className="flex justify-between text-sm">
                <p>20% off on next booking</p>
                <p>Mobile No. +94 759498916</p>
              </div>
          </div>
        </div>
        <div className="container py-3 sm:py-1">
          <div className='flex justify-between items-center'>
            {/* logo section */}
            <div>
                <Link to="/" onClick={() => window.scrollTo(0,0)}>
                  <img 
                    src={LogoImg} 
                    alt=""
                    className='h-[70px] sm:h-[75px]'
                   />
                </Link>
            </div>
            {/* Desktop Navlinks sections */}
            <div className='hidden md:block'>
              <ul className='flex items-center gap-4 lg:gap-6'>
                <li className='py-4'>
                  <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "inactive")} onClick={() => window.scrollTo(0,0)}>
                    Home
                  </NavLink>
                </li>
                <li className='py-4'>
                  <NavLink to="/blogs" className={({ isActive }) => (isActive ? "active" : "inactive")} onClick={() => window.scrollTo(0,0)}>
                    Blogs
                  </NavLink>
                </li>
                <li className='py-4'>
                  <NavLink to="/places" className={({ isActive }) => (isActive ? "active" : "inactive")} onClick={() => window.scrollTo(0,0)}>
                    Best Places
                  </NavLink>
                </li>
                <li className='py-4'>
                  <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "inactive")} onClick={() => window.scrollTo(0,0)}>
                    About
                  </NavLink>
                </li>
                {/* DROPDOWN */ }
                <li className='relative group cursor-pointer py-4'>
                  <div className='dropdown flex items-center'>
                    <span>Quick Links</span>
                    <span>
                      <FaCaretDown className='transition-all duration-200 group-hover:rotate-180'/>
                    </span>
                  </div>
                  <div className='absolute -left-7 z-[999] hidden group-hover:block shadow-md text-black w-[150px] bg-white p-2'>
                    <ul>
                      {dropdownLinks.map((data) => {
                        return (
                          <li key={data.name}>
                              <a 
                                className='inline-block w-full text-sm rounded-md p-2 hover:bg-secondary' 
                                href={data.link}
                              >
                                {data.name}
                              </a>
                          </li>
                        )
                        })
                      }
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            {/* Book Now Button */}
            <div className='flex items-center gap-4'>
                <button
                  onClick={() => props.handleOrderPopup()}
                  className='bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary transition-all duration-500 text-gray-900 px-4 py-2 rounded-full font-semibold text-sm md:text-base'
                >
                  Book Now
                </button>
                {/* Mobile hamburger menu */}
                <div className='md:hidden block'>
                  {showMenu ? (
                    <HiMenuAlt1
                      onClick={toggleMenu}
                      className='cursor-pointer transition-all'
                      size={30}
                    />
                  ) : (
                    <HiMenuAlt3
                      onClick={toggleMenu}
                      className='cursor-pointer transition-all'
                      size={30}
                    />
                  )}
                </div>
            </div>
          </div>
        </div>
        <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu}/>
      </div>
    </>
  )
}

export default Navbar
