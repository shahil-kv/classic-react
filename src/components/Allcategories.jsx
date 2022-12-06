import React from 'react'
import styled from 'styled-components';
const Container = styled.section`
 
`;

 const AllCategory=styled.div`
       display: flex;
       justify-content: center;
       gap: 40px;
       align-items: center;
       margin: 150px 20% 80px 20%;
       font-size: 15px;
       font-weight: 200;
 `
  const FirstDiv=styled.div`
   background-color: #ec3b3b;
   padding: 5px 35px;
    width: 220px;
    border-radius: 30px;
    color: white;
 ` 
//  const SecondDiv=styled.div`
//     background-color: white;
//     border: 0.5px solid black;
//    padding: 5px 35px;
//     width: 210px;
//     border-radius: 30px;
//  `
//   const ThirdDiv=styled.div`
//     background-color: white;
//     border: 0.5px solid black;
//    padding: 5px 35px;
//     width: 210px;
//     border-radius: 30px;
//  `
//   const FifthDiv=styled.div`
//     background-color: white;
//     border: 0.5px solid black;
//    padding: 5px 35px;
//     width: 190px;
//     border-radius: 30px;
//   `
  const FourthDiv=styled.div`
    background-color: white;
    border: 0.5px solid black;
    padding: 5px 15px 5px 25px;
    width: 190px;
    border-radius: 30px;
     &:hover{
      background-color: #ec3b3b;
      transition: 0.2s ease-in-out;
       color: white;
     }
 `
 const Txt=styled.h3`
  
 `
function Allcategories() {
  return (
    <Container>
         <AllCategory>
           <FirstDiv>
           <Txt>All Category</Txt>
           </FirstDiv>   
            <FourthDiv>
            <Txt>Classic Paints</Txt>
           </FourthDiv>    
           <FourthDiv>
            <Txt>Classic Brushes </Txt>
            
           </FourthDiv>   
            <FourthDiv>
            <Txt>Classic Rust</Txt>
      
           </FourthDiv> 
           <FourthDiv>
            <Txt>Classic Rust</Txt>
      
           </FourthDiv>
       </AllCategory> 
    </Container>
  )
}

export default Allcategories