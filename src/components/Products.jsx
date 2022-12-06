import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
 const Container=styled.div`
  display: flex;
   flex-wrap: wrap;
   margin: 50px 10% 0px 10%;
   justify-content: space-between;
 `
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item)=>(
        <Product item={item} id={item.id}/>
      ))}
    </Container>
  )
}

export default Products