import React from 'react'
import styled from 'styled-components';
const Container = styled.section`
 
`;

 const AllCategory=styled.div`
       display: flex;
       justify-content: center;
       justify-content: space-between;
       align-items: center;
       margin: 150px 20% 80px 20%;
       font-size: 20px;
 `
  const Fdiv=styled.div`
   background-color: red;
   padding: 5px 15px;
    width: 190px;
    border-radius: 30px;
    color: white;
    font-weight: 100;

 ` 
 const Sdiv=styled.div`
    background-color: white;
    border: 0.5px solid black;
   padding: 5px 15px;
    width: 210px;
    border-radius: 30px;

 `
  const Tdiv=styled.div`
    background-color: white;
    border: 0.5px solid black;
   padding: 5px 15px;
    width: 210px;
    border-radius: 30px;
 `
  const Fodiv=styled.div`
    background-color: white;
    border: 0.5px solid black;
   padding: 5px 15px;
    width: 190px;
    border-radius: 30px;
 `
 const Txt=styled.h3`
  
 `
function Allcategories() {
  return (
    <Container>
         <AllCategory>
           <Fdiv>
           <Txt>All Category</Txt>
           </Fdiv>   
            <Sdiv>
            <Txt>Classic Brush</Txt>
           </Sdiv>    
           <Tdiv>
            <Txt>Classic Paints</Txt>
            
           </Tdiv>   
            <Fodiv>
            <Txt>Classic Rust</Txt>
            
           </Fodiv>
       </AllCategory> 
    </Container>
  )
}

export default Allcategories