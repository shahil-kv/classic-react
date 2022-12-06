import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
  height: 600px;
`

const Fdiv=styled.div`
  width: 460px;
  background-color: #ADD8E6;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 40px;
 border-radius: 10px;
`
const Scontainer=styled.div`
 margin-top: 25px;
 display: flex;
 height: 400px;
 flex-direction: row;
 /* background-color: red; */
 justify-content: center;
 justify-content: space-between;
 margin-left:10%;
 margin-right: 13%;
`
const Text=styled.p`
  
`
const Name=styled.h5`
  
`
const About=styled.h6`
  
`
const Image=styled.img`
  
`
const Flexdiv=styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
const Namediv=styled.div`

`
const Title=styled.h2`
     display: flex;
     flex-direction: row;
     justify-content: center;
     margin-top: 130px;
     margin-bottom: 70px;
`
const ReviewN = () => {
  return (
    <Container>
     <Title>What people say about our service</Title>
    <Scontainer>
    <Fdiv>
     <img src="" alt="icons" />
     <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since </Text>
      <Flexdiv>
     <Image src='' alt='shahil'/>
     <Namediv>
     <Name>Shahil</Name>
     <About>Software Developer</About>
     </Namediv>
      </Flexdiv>
    </Fdiv> 
    <Fdiv>
    <img src="s" alt="icons" />
     <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</Text>
      <Flexdiv>
      <Image src='' alt='shahil'/>
     <Namediv>
     <Name>Lionel Messi</Name>
     <About>Argentinian Footballer</About>
     </Namediv>
      </Flexdiv>
    </Fdiv>
    <Fdiv>
    <img src="s" alt="icons" />
     <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since</Text>
      <Flexdiv>
      <Image src='' alt='shahil'/>
     <Namediv>
     <Name>Hisham Kannapi</Name>
     <About>Team lead of kannapi gang</About>
     </Namediv>
      </Flexdiv>
    </Fdiv> 
    </Scontainer>
     </Container>
  )
}

export default ReviewN