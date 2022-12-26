import React from 'react';
import styled from 'styled-components';
import { Search } from "@mui/icons-material";

const Container=styled.section`
background-color: green;
height: 100vh;
background-image: url('./Files/markus-spiske-k0rVudBoB4c-unsplash 1.jpg');
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