import React from 'react'
import Allcategories from '../components/Allcategories'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Products from '../components/Products'

import Slide from '../components/Slide'
const Home=()=> {
  return (
    <div>
    <Navbar/>
    <Slide/>
    <Categories/>
    <Allcategories/>
    <Products/>
    </div>
  )
} 

export default Home