import React from 'react'
import Allcategories from '../components/Allcategories'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import ReviewN from '../components/ReviewN'
// import Reviews from '../components/Reviews'
import Slide from '../components/Slide'
const Home=()=> {
  return (
    <div>
    <Navbar/>
    <Slide/>
    <Categories/>
    <Allcategories/>
    <Products/>
    {/* <Reviews/> */}
    <ReviewN/>
    </div>
  )
} 

export default Home