import React from 'react'
import styled from 'styled-components'
import Review from './Review'
import { shahil } from '../data'
const Container=styled.div`
  
`
const Reviews = () => {
  return (
    <Container>
     {shahil.map((item)=>(

    <Review item={item} id={item.id}/>
     ))}
    </Container>
  )
}

export default Reviews