import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'

const About = React.lazy(() => import('./pages/About'))
const Blogs = React.lazy(() => import('./pages/Blogs'))
const BlogsDetails = React.lazy(() => import('./pages/BlogsDetails'))
const PlacesRoute = React.lazy(() => import('./pages/PlacesRoute'))
const NoPage = React.lazy(() => import('./pages/NoPage'))


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

