import React from 'react';
import styled from 'styled-components';
import { Search } from "@mui/icons-material";

const Container=styled.section`
background-color: green;
height: 100vh;
background-image: url('data:image/jpeg;base64,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');
background-repeat: no-repeat;
background-size:cover;
/* background-position:center; */
`
const Wrapper=styled.section`
height: 92vh; 
 padding : 250px 0px 0px 200px ;
`
const TitleDiv=styled.div`
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
 border-radius: 10px;
 padding: 10px 30px 10px 30px ;

 border: 1px solid black ;
`
// Navbar section

const Nav = styled.div`
  display: flex;
  height: auto;
  justify-content: space-between;
  padding: 1% 10% 0px 10%;
  align-items: center;
`;
const First = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 370px;
`;
const Second = styled.div``;
const Third = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
`;
const ButtonFirst = styled.button`
  width: 140px;
  height: 45px;
  &:hover {
    background-color: #000000;
    color: white;
    transition: .3s ease;
  box-shadow: 0px 0px 5px 0.1px  white;

  }
  border-radius: 5px;
  border: none;
  box-shadow: 0px 0px 5px 0.1px  #00000044;
`;
const Input = styled.input`
  border: 0.2px solid black;
  border-radius: 5px;
  padding-left: 35px;
  width: 250px;
  height: 45px;
  position: relative;
`;
const Logo = styled.h1`
  font-weight: 600;
  font-size: 40px;
`;
const Anger = styled.a`
  text-decoration: none;
  color: #000000b3;
`;
const style = { position: "absolute", marginLeft: "5px" };

function Slide() {
  return (
  
     <Container>
     <Nav>
      <First>
        <Anger href="shahilkv.com">Categories</Anger>
        <Anger href="shahilkv.com">Register</Anger>
        <Anger href="shahilkv.com">Login</Anger>
      </First>
      <Second>
        <Logo>
          CLASSIC<span style={{ color: "red" }}>.</span>
        </Logo>
      </Second>
      <Third>
        <Input type="text" placeholder="Search" />
        <Search  style={style}/>
        <ButtonFirst>Cart </ButtonFirst>
      </Third>
     </Nav>
    <Wrapper>
      <TitleDiv>
        <Title>The Perfect <Span>Tool</Span>  you need</Title>
      </TitleDiv>
      <Para>Simple easy and comfortable</Para>
      <ButtonDiv>
        <Button>Buy Now</Button>
        <ButtonSecond>About</ButtonSecond>
      </ButtonDiv>
    </Wrapper>
    </Container>
  )
}

export default Slide