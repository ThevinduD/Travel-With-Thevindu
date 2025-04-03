import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Popup from '../components/Popup'


const Layout = (props) => {

  return (
    <>
      <Navbar handleOrderPopup={props.handleOrderPopup}/>
      <Outlet/>
      {props.orderPopup && <Popup handleOrderPopup={props.handleOrderPopup} />}
      <Footer/>
    </>
  )
}

export default Layout
