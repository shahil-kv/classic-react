import React from 'react'
import styled from 'styled-components'

// this is the styling of the navbar
// styled components  is used in it

const Container=styled.div`
 display: flex;
 height: auto;
 justify-content: space-between;
 /* background-color: yellow; */
 padding:1% 10% 0px 10%;
 align-items: center ;
`
const First=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
/* background-color: red; */
width: 370px;
`
const Second=styled.div`
  
`
const Third=styled.div`
 display: flex;
 /* background-color: green; */
 flex-direction: row;
 justify-content: space-between;
 gap: 30px;
 align-items: center;
`
const Button=styled.button`
  width: 140px;
  /* background-color: yellow; */
  height: 45px;
  border-radius: 5px;
`
const Input=styled.input`
border-radius: 5px;
 padding-left: 10px;
  width: 250px;
  height: 45px;
`
const Logo=styled.h1`
font-weight: 600;
`
const Anger=styled.a`
  text-decoration: none;
  color: #000000b3;
`
function Navbar() {
  return (
       <Container>
       <First>
      <Anger href="shahilkv.com">Home</Anger>
      <Anger href="shahilkv.com">Categories</Anger>
      <Anger href="shahilkv.com">Contact</Anger>
       </First>
       <Second>
      <Logo>Classic</Logo>
       </Second>
       <Third>
       <Input type="text" placeholder='Search' />
       <Button >Cart</Button>
       </Third>
       </Container>

  )

}

export default Navbar