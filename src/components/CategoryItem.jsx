import styled from "styled-components";
import React from "react";

// // styling

// // sahhil is a killadi div
// const FirstDiv = styled.div`
//   border: 1px solid black;
//   background-color: white;
//  width: 700px;
//  height: 500px;

// `;
// // love you bro div
// const SecondDiv = styled.div`
//   background-color: white;
//  width: 600px;
//  height: 270px;
//   border: 1px solid black;
//  margin-left: 10px;
//  margin-bottom: 10px;

//   `;
//   // what the heck
// const ThirdDiv = styled.div`
//   background-color: white;
//   border: 1px solid black;
//   width: 300px;
//   height: 220px;
//   margin-left:10px ;
//   margin-right:10px ;
//   `;
//   // leomessi
// const FourthDiv = styled.div`
// border: 1px solid black;
// background-color: white;
// width: 300px;
//   height: 220px;

// `
// const FlexContainer=styled.div`
//   display: flex;
//   flex-direction: column;

// `
// const SecondFlex=styled.div`
//    display: flex;
//    flex-direction: row;
// `

//  const Image=styled.img`
//     width: 100%;
  /* height: 100%;
  object-fit: cover;
 `
 const Info=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 `
 const Title=styled.div`
    color: white;
    margin-bottom: 20px;
 `
 const Button=styled.div`
   border: none;
   padding: 10px;
   background-color: white;
   color: gray;
   cursor: pointer;
   font-weight: 600;
 ` */
//  const AllCategory=styled.div`
   
//  `
//   const Fdiv=styled.div`
  
//  ` 
//  const Sdiv=styled.div`
  

//  `
//   const Tdiv=styled.div`
  
//  `
//   const Fodiv=styled.div`
  
//  `
//  const Txt=styled.h3`
  
//  `
const Wrapper=styled.section`
   /* padding: 70px 190px ; */
 padding-top:100px;
 padding-left: 200px;
 padding-right: 100px;
 /* background-color: blue; */
 display: flex;
 flex-direction: row;
 width: 100%;
 height: 60vh;
 gap: 10px;
 background-image: url();
`
const Container = styled.section`

`;

const FirstDiv=styled.div`

     width: 710px;
     height: 500px;
     background-color: red;
     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: 5px;
     text-align: center;
     `
const SecondDiv=styled.div`
/* position: absolute; */
      display: flex;
      flex-direction: column;
  /* background-color: orange; */
  width: 900px;
  gap: 10px;
  height: 500px;
  `
const FDiv=styled.div`
border-radius: 5px;
background-color: yellow;
width: 750px;
height: 250px;
display: flex;
     align-items: center;
     justify-content: center;
     text-align: center;
     `
const SDiv=styled.div`
     border-radius: 5px;
     background-color  : green ;
     width:750px;
  height: 250px;
  display: flex;
     align-items: center;
     justify-content: center;
     text-align: center;
`
const Text=styled.span`
    background-color: red;
    border-radius: 3px;
    color: white;
    width: 227px;
`
const Circle=styled.div`
 position: relative;
   width: 150px;
   top: 05px;
   left: 240px;
   height: 150px;
   border-radius:50%;
   background-color: white;
`
// Next Box
const NextContainer=styled.div`
margin-top: 150px;
display: flex;
flex-direction: row;
 gap: 15px;
width: 100%;
 padding-left: 200px;
 padding-right: 100px;
`
const SuperFirst=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 480px;
  height: 250px;
  background-color: #f1dfe2;
  border-radius: 5px;
  `
const SuperSecond=styled.div`
   width: 480px;
   height: 250px;
   gap: 10px;
   display: flex;
   flex-direction: column;

   `
const SuperThird=styled.div`
  width: 470px;
   height: 250px;
   background-color: #f1dfe2;
   display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 5px;
  `
const Title1=styled.span`
    text-align:center;
    margin-bottom: 50px;
    
`
const Title2=styled.span`
  text-align: center;
  margin-bottom: 50px;
  `
const WowFirst=styled.span`
border-radius: 5px;
width: 480px;
height: 120px;
display: flex;
flex-direction: column;
justify-content: flex-end;
background-color: #f1dfe2;
`
const WowSecond=styled.span`
  border-radius: 5px;
  width: 480px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #f1dfe2;
`
const TitleFirst=styled.span`
 text-align: center;
 margin-bottom: 30px;
 margin-left: 120px;
`
const TitleSecond=styled.span`
   text-align: center;
 margin-bottom: 40px;
 margin-left: 110px;
`


const CategoryItem = () =>{
  return (
    <Container>
       <Wrapper>
      <FirstDiv>
      <Text>CLASSIC SPEALIC STYLE</Text>
    <Circle/>
      </FirstDiv>
      <SecondDiv>
        <FDiv>
      <Text>CLASSIC SPEALIC STYLE</Text>
        </FDiv>
        <SDiv>
      <Text>CLASSIC SPEALIC STYLE</Text>
        </SDiv>
      </SecondDiv>
       </Wrapper>

      <NextContainer>
      <SuperFirst>
        <Title1>Super Fast and Free Delivary</Title1>
      </SuperFirst>
      <SuperSecond>
       <WowFirst>
       <TitleFirst>Non-Contact Shipping</TitleFirst>
       </WowFirst>   
         <WowSecond>
         <TitleSecond>Money-back Gurrente</TitleSecond>
       </WowSecond>
      </SuperSecond>
      <SuperThird>
        <Title2>Super Secure Payment System</Title2>
      </SuperThird>
      </NextContainer>
    </Container>
 
  );
}

export default CategoryItem;
