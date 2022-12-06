import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
  width : 100%;
`

const Fdiv=styled.div`
   background-color: red;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 200px;
`

const Scontainer=styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
`
const Text=styled.p`
  
`
const Name=styled.h3`
  
`
const About=styled.h3`
  
`
const Image=styled.h3`
  
`
const Flexdiv=styled.div`
 display: flex;
 flex-direction: row;
`
const Namediv=styled.div`
   display: flex;
   flex-direction: row;
`
const Sdiv=styled.div`
  
`
const Ldiv=styled.div`
  
`

const Review = ({item}) => {
  return (
    <Container>
   <Scontainer>
   <Fdiv>
    <img src="s" alt="icons" />
    <Text>{item.para}</Text>
     <Flexdiv>
    <Image src={item.img}/>
    <Namediv>
    <Name>{item.name}</Name>
    <About>{item.about}</About>
    </Namediv>
     </Flexdiv>
   </Fdiv> 
   <Sdiv>
    
   </Sdiv>
   <Ldiv>
 leo messi
   </Ldiv> 
   </Scontainer>
    </Container>
  )
}

export default Review