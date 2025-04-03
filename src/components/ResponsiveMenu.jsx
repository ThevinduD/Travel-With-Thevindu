import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const navbarLinks = [
    {
        name:"Home",
        link: "/"
    },
    {
        name:"About",
        link: "/about"
    },
    {
        name:"Blogs",
        link: "/blogs"
    },
    {
        name:"Best Places",
        link: "/places"
    },
]

const ResponsiveMenu = ({showMenu, setShowMenu}) => {
  return (
    <div className={`${showMenu? "left-0" : "-left-[100%]"} fixed bottom-0
    top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}>
      <div className='Navbar_card'>
        {/* Top Section */}
        <div>
            <div className='flex items-center gap-4 justify-start'>
                <FaUserCircle size={50}/>
                <div className='text-gray-500'>
                    <h1>Hello User</h1>
                    <h1 className='text-sm text-slate-500'>Premium User</h1>
                </div>
            </div>
        </div>
        {/* Navlink section */}
        <div className='text-black mt-12'>
            <ul className='space-y-4 text-xl'>
                {navbarLinks.map((item) => {
                    return (
                        <li>
                            <Link 
                                to={item.link}
                                onClick={() => {setShowMenu(false); window.scrollTo(0,0)}}
                                className='mb-5 inline-block'
                            >
                                {item.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveMenu

{/* {navbarLinks.map((item) => {
            return (
                <a href={item.link}> {item.name} </a>
            )
        })} */}
