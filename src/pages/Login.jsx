import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
 /* margin-top: 100px; */
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 background-color: yellow;
`
const Wrapper=styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
 padding: 50px;
  border-radius: 25px;
   background-color: white;
  
   gap: 30px;
    display: flex;
    flex-direction: column;
    width: 450px;
    height: 550px;
`
const Title=styled.h2`
  text-align: center;
`
const Para=styled.p`
   font-size: 20px;
   font-weight: 400;
   text-align: center;
   width: 350px;
   margin-bottom: 10px;
`
const Input=styled.input`
    padding: 10px;
   border: 0.1px solid black;
   border-radius: 5px;
   border: none;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Button=styled.button`
  margin-top:10px;
   padding: 10px;
   border-radius: 10px;
   border: none;
   box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Last=styled.p`
   margin-top: 30px;
   font-size: 15px;
   font-weight: 100;
   text-align: center;
`
const Span=styled.a`
  color: black;
  font-size: 20px;
  text-decoration-line: underline;
`
const Login = () => {
  return (
    <Container>
       <Wrapper>
    <Title>Welcome Back </Title>
    <Para>Hey, Enter your details to get sign in to your account</Para>
    <Input placeholder='Enter Username'></Input>
    <Input placeholder='Password'></Input>
    <Button>Sign In</Button>
     <Last> Dont have an account? <Span >Register Now</Span>  </Last>
       </Wrapper>
    </Container>
  )
}

export default Login;