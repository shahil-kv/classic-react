import React from 'react'
import Allcategories from '../components/Allcategories'
import CategoryItem from '../components/CategoryItem'
import Footer from '../components/Footer'
import Products from '../components/Products'
import ReviewN from '../components/ReviewN'
// import Reviews from '../components/Reviews'
import Slide from '../components/Slide'
const Home=()=> {
  return (
    <div>

    <Slide/>
    <CategoryItem/>
    <Allcategories/>
    <Products/>
    {/* <Reviews/> */}
    <ReviewN/>
    <Footer/>
    </div>
  )
} 

export default Home