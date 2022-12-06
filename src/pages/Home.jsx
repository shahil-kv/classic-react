import React from 'react'
import Allcategories from '../components/Allcategories'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Reviews from '../components/Reviews'
import Slide from '../components/Slide'
const Home=()=> {
  return (
    <div>
    <Navbar/>
    <Slide/>
    <Categories/>
    <Allcategories/>
    <Products/>
    <Reviews/>
    </div>
  )
} 

export default Home