import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    /* background-color: yellow; */
    height: 90vh;
    width: 100%;
    display: flex;
    background-color: #f9f7ff;
    display: flex;
    align-items: center;
    justify-content: center;
   
`

const FirstSection=styled.div`
 padding-top: 50px;
 background-color: white;
 height: 70vh;
 display: flex;
 width: 30vw;
  flex: 1;
 flex-direction: column;
 /* justify-content: space-around; */
 gap: 40px;
 padding-left: 30px;
`
const SecondSection=styled.div`
   flex: 1;
   background-color: teal;
   width:25vw;
   height: 70vh;
`
const Wrapper=styled.div`
border-radius: 30px;
overflow: hidden;
 display: flex;
 /* margin: 100px 300px; */
`
const Ac =styled.span`
    font-weight: 100;
    font-size: 12px;
`
const RegisterText=styled.h3`
     font-weight: 500;
     font-size: 35px;
`
const NameDiv=styled.div`
      display: flex;
`
const NameLabel=styled.label`
 font-size: 12px;
 color: #0000008f;
`
const NameLabelEmail=styled.label`
display: block;
font-size: 12px;
 color: #0000008f;
;
 margin-left: 20px;
`
const Input=styled.input`
  width: 240px;
  margin-right: 30px;
  padding: 7px;
  border-radius: 5px;
  border:none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`
const Button=styled.button`
  width: 500px;
  padding: 10px;
  background-color: #ea4c89;
  color: white;
  border: none;
  margin-bottom:40px;
  border-radius: 7px;
  border: 0.1px solid black;
`
// const RegisterWith=styled.span`
//    font-weight: 100;
//    font-size: 12px;
//    margin-left: 200px;
//    ::before{
//     content:'';
//     width: 200px;
//     height: 20px;
//     background-color: red;
//    }
// `
const Img=styled.img`
    flex: 1;
    width: 100%;
    height: 300px;
`
 const FlexLine=styled.div`
     display: flex;
     flex-direction: column;
     gap: 5px;
 `
 const InputPassword=styled.input`
  width:500px;
  margin-right: 20px;
  padding: 7px;
  border-radius: 5px;
   border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
 `
 const Privacy=styled.p`
    font-size: 13px;
    font-weight: 200;
    width: 500px;
    margin-top: 10px;
 `
const Register = () => {
  return (
    <Container>
        <Wrapper>
         <FirstSection>
            <Ac>Have an account?<span style={{color:'red'}}>Sign in</span></Ac>
            <RegisterText>Register</RegisterText>
             <NameDiv>
             <FlexLine>
              <NameLabel>Username</NameLabel>
                <Input></Input>
             </FlexLine>

             <FlexLine>
                <NameLabelEmail>Email</NameLabelEmail>
                <Input></Input>
             </FlexLine>
             </NameDiv>
           <FlexLine>
           
         <NameLabel>Password </NameLabel>
             <InputPassword></InputPassword>
               <NameLabel>Confirm Password </NameLabel>
             <InputPassword></InputPassword>
             <Privacy>By Creating an account, I consent to the processing of my personal data in accordance with the <span> PRIVACY POLICY </span></Privacy>
           </FlexLine>
            <Button>Register</Button>

           </FirstSection>
           <SecondSection>
         <Img src='' alt='shuii'></Img>
           </SecondSection>
        </Wrapper>
    </Container>
  )
}

export default Register