import React from 'react'
// import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Slide from '../components/Slide'
import CategoryItem from '../components/CategoryItem'
const Home=()=> {
  return (
    <div>
    <Navbar/>
    <Slide/>
    {/* <Categories/> */}
    <CategoryItem/>
    </div>
  )
} 

export default Home