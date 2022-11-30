import React from 'react'
import styled from 'styled-components'

const Container=styled.section`
background-color: yellow;
height: 92vh; 
 padding : 250px 0px 0px 170px ;
`
const TitleDiv=styled.div`
    /* background-color: black; */
    width: 600px;
`
const Title=styled.h1`
    color: black;
    font-weight: 700;
    font-size: 75px;
    line-height: 102px;
`
const Para=styled.p`
    width: 279px;
    font-weight: 300;
    font-size: 17px;
    margin-top: 30px;
    margin-bottom: 55px;
`
const ButtonDiv=styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
  justify-content: space-between;
  /* background-color: black; */
`
const Button=styled.button`
 background-color: #EC3B3B;
 color: white;
 border-radius: 10px;
padding: 10px 20px 10px 20px ;
border: none;
`
const Span=styled.span`
  color: red;
`
const ButtonSecond=styled.button`
   background-color: transparent;
 color: black;
 border-radius: 10px;
 padding: 10px 20px 10px 20px ;
 border: none;
`
function Slide() {
  return (
    <Container>
      <TitleDiv>
        <Title>The Perfect <Span>Tool</Span>  you need</Title>
      </TitleDiv>
      <Para>Simple easy and comfortable</Para>
      <ButtonDiv>
        <Button>Buy Now</Button>
        <ButtonSecond>About</ButtonSecond>
      </ButtonDiv>
    </Container>
  )
}

export default Slide