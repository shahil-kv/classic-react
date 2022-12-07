import { Search } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

// this is the styling of the navbar
// styled components  is used in it

const Container = styled.div`
  display: flex;
  height: auto;
  justify-content: space-between;
  background-color: white;
  padding: 1% 10% 0px 10%;
  align-items: center;
`;
const First = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background-color: red; */
  width: 370px;
`;
const Second = styled.div``;
const Third = styled.div`
  display: flex;
  /* background-color: green; */
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  align-items: center;
`;
const Button = styled.button`
  width: 140px;
  /* background-color: yellow; */
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
`;
const Anger = styled.a`
  text-decoration: none;
  color: #000000b3;
`;
const style = { position: "absolute", marginLeft: "5px" };
function Navbar() {
  return (
    <Container>
      <First>
        <Anger href="shahilkv.com">Home</Anger>
        <Anger href="shahilkv.com">Categories</Anger>
        <Anger href="shahilkv.com">Contact</Anger>
      </First>
      <Second>
        <Logo>
          CLASSIC<span style={{ color: "red" }}>.</span>
        </Logo>
      </Second>
      <Third>
        <Input type="text" placeholder="Search" />
        <Search style={style} />
        <Button>Cart </Button>
      </Third>
    </Container>
  );
}

export default Navbar;
