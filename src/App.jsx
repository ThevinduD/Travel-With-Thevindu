import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import BlogsDetails from './pages/BlogsDetails'
import PlacesRoute from './pages/PlacesRoute'
import NoPage from './pages/NoPage'


const App = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);
  
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/> }>
            <Route index element={ <Home orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/> } />
            <Route path='/about' element={ <About/> } />
            <Route path='/blogs' element={ <Blogs/> } />
            <Route path='/blogs/:id' element={ <BlogsDetails/> } />
            <Route path='/places' element={ <PlacesRoute handleOrderPopup={handleOrderPopup} /> } />
            <Route path='*' element={ <NoPage/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

