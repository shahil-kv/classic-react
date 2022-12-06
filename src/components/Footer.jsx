import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
  margin-top: 50px;
    display: flex;
 background-color: #f4ebee;
 height: 520px;
 width: 100%;
 flex-direction: row;
 flex-wrap: wrap;
 justify-content: space-between;
  /* gap:40px; */
 padding: 70px 180px 0px 180px;
`

const FirstDiv=styled.div`
     width: 250px;
     margin-right: 100px;
`
const SecondDiv=styled.div`
    width: 170px;
`
const ThirdDiv=styled.div`
    width: 220px;
`

const FourthDiv=styled.div`
    width: 230px;
`
const FifthDiv=styled.div`
    width: 310px;
`
const Logo=styled.h3`
     font-weight: 400;
`
const Para=styled.p`
    font-size: 20px;
    font-weight: 400;
`
const Anger=styled.a` 
    cursor: pointer;
    text-decoration: none;
    color: #00000098;
    font-size: 16px;
    font-weight: 400;
`
const Input=styled.input`
     padding:10px  20px;
     width: 280px;
`
const FlexDiv=styled.div`
    display: flex;
    flex-direction: column;
     height: 230px;
    justify-content: space-between;

`
// const Btn=styled.button`
//     background-image: url();
// `
const Logos=styled.h3`
   font-weight: 400;
    margin-bottom: 20px;
`
const LogoL=styled.h3`
    margin-bottom: 30px;
    font-size: 40px;
`
const Copy=styled.p`
     margin-top: 170px;
    font-weight: 100;
    font-size: 17px;
    color: #00000063;
`
const Footer = () => {
  return (
    <Container>
       <FirstDiv>
    <LogoL>CLASSIC<span style={{color:'#ec3b3b'}}>.</span></LogoL>
    <Para>Collaboration platform for modern items</Para>
       <Copy>© Copyright Classic 2022 Inc. </Copy>
       </FirstDiv>
       <SecondDiv>
       <FlexDiv>
    <Logo>COMPANY</Logo>
    <Anger>About Us</Anger>
    <Anger>Careers</Anger>
    <Anger>Contact Us</Anger>
       </FlexDiv>
       </SecondDiv>
       <ThirdDiv>
       <FlexDiv>
       <Logos>FEATURES</Logos>
    <Anger>Screen sharing</Anger>
    <Anger>IOS & Android Aps</Anger>
    <Anger>File Sharing</Anger>
    <Anger>User Management</Anger>
       </FlexDiv>
       </ThirdDiv>
       <FourthDiv>
       <FlexDiv>
       <Logo>CONTACT US</Logo>
    <Anger href='shahilkv.com'>shahilkv@gmail.como</Anger>
    <Anger>+91 9846786928</Anger>
    <Anger>Arakkinar Balan Road</Anger>
       </FlexDiv>
       </FourthDiv>
       <FifthDiv>
       <FlexDiv>
       <Logo>STAY UP TO DATE</Logo>
    <Anger>Subscribe to our news Letter</Anger>
     <Input placeholder='Email'></Input>
     {/* <Btn></Btn> */}
       </FlexDiv>
       </FifthDiv>
    
    </Container>
  )
}

export default Footer