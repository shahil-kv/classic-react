import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container=styled.div`
    
`
const Wrapper=styled.div`
   padding: 50px;
   display: flex;
`
const ImgContainer=styled.div`
  flex: 1;
`
const Image=styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
`
const InfoContainer=styled.div`
  flex: 1;
  padding: 0px 50px;
`
const Title=styled.h1`
   font-weight: 200;
`
const Desc=styled.p`
    margin: 20px 0px;
    font-weight: 400;
    font-size: 30px;
`
const Price=styled.span`
   font-weight: 400;
   font-size:40px ;
`
const FilterContainer=styled.div`
   display: flex;
   justify-content: space-between;
   width: 50%;
   margin: 30px 0px;
`
const Filter=styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle=styled.span`
   font-size: 20px;
   font-weight: 200;
`
const FilterColor=styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   background-color: ${props=>props.color};
   margin: 0px 5px;
   cursor: pointer;
`
const FilterSize=styled.select`
 margin-left: 10px;
`
const FilterSizeOption=styled.option`
  
`
const AddContainer=styled.div`
   display: flex;
    justify-content: space-between;
   align-items: center;
   width: 50%;
`
const AmountContainer=styled.div`
   display: flex;
   align-items: center;
   font-weight: 400;
`
const Amount=styled.span`
   width: 30px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid teal;
   display: flex;
   align-items: center;
   justify-content: center;
    margin: 0px 5px;
`
const Button=styled.button`
   padding: 15px;
   border: 2px solid teal;
   background-color: white;
   cursor: pointer;
   font-weight: 400;

   &:hover{
    background-color: yellow;
   }
`
const AboutSection=styled.div`
   margin-top: 90px;
`
const ParaS=styled.p`
   font-weight: 400;
`
const AboutTitle=styled.p`
    margin-bottom: 30px;
`
const Hr=styled.hr`
  width: 65px;

`

const Product = () => {
  return (
    <Container>
        <Navbar/>
         <Wrapper></Wrapper>
        <Wrapper>
          <ImgContainer>
            <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' alt='shahil'/>
          </ImgContainer>
          <InfoContainer>
            <Title>Denim Jeans</Title>
            <Desc>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, modi error, laudantium saepe quae sunt </Desc>
              <Price>800 Rs </Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor color='black'/>
                  <FilterColor color='blue'/>
                  <FilterColor color='gray'/>
                </Filter>
                <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
                </Filter>

              </FilterContainer>

              <AddContainer>
                <AmountContainer>
                  <Remove/>
                  <Amount>1</Amount>
                  <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
              </AddContainer>
              <AboutSection>
               <AboutTitle>About <Hr></Hr> </AboutTitle>
                <ParaS>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae saepe totam, ab libero excepturi amet fuga provident! Neque nihil veritatis aspernatur quod eveniet hic ea, sit labore optio commodi Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae saepe totam, ab libero excepturi amet fuga provident! Neque nihil veritatis aspernatur quod eveniet hic ea, sit labore optio commodi.</ParaS>
              </AboutSection>
          </InfoContainer>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Product