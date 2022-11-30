import styled from "styled-components";
import React from "react";

// styling
const Container = styled.section`
  display: flex;
  flex-direction: row;
  background-color: red;
  width: 100%;
  height: 60vw;
  display: flex;
  padding: 2% 10% 5% 10%;
`;
// sahhil is a killadi div
const FirstDiv = styled.div`
  border: 1px solid black;
  background-color: white;
 width: 700px;
 height: 500px;

`;
// love you bro div
const SecondDiv = styled.div`
  background-color: white;
 width: 800px;
 height: 270px;
  border: 1px solid black;
 margin-left: 10px;
 margin-bottom: 10px;

  `;
  // what the heck
const ThirdDiv = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 400px;
  height: 220px;
  margin-left:10px ;
  margin-right:10px ;
  `;
  // leomessi
const FourthDiv = styled.div`
border: 1px solid black;
background-color: white;
width: 390px;
  height: 220px;

`
const FlexContainer=styled.div`
  display: flex;
  flex-direction: column;

`
const SecondFlex=styled.div`
   display: flex;
   flex-direction: row;
`

function CategoryItem() {
  return (
    <Container>
      <FirstDiv>
      <h2>shahil is a killadi</h2>
      </FirstDiv>
      <FlexContainer>
      <SecondDiv>
      <h2>love you bro</h2>

      </SecondDiv>
      <SecondFlex>

      <ThirdDiv>
      <h2>what the heck</h2>

      </ThirdDiv>
      <FourthDiv>
      <h2>lwo messii</h2>

      </FourthDiv>
      </SecondFlex>
      </FlexContainer>
    </Container>
  );
}

export default CategoryItem;
