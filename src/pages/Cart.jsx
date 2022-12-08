import React from 'react'
// import Navbar from '../components/Navbar'
 import styled from 'styled-components'
import Footer from '../components/Footer'
import { Add, Remove } from '@mui/icons-material'
 const Container=styled.div`
    
 `

 const Wrapper=styled.div`
    padding: 20px;
 `

 const Title=styled.div`
    font-weight: 200;
    font-size: 40px;
    text-align: center;
    
 ` 
 const Top=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    flex-direction: row;
 ` 

 const TopButton=styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type==='filled' &&'none'};
    background-color: ${props=>props.type==='filled' ? 'black':'transparent'};
    color: ${props=>props.type==='filled' && 'white'};
 `
 const TopTexts=styled.div`
   
 `
  const TopText=styled.div`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    
 `;

const Bottom=styled.div`
    display: flex;
    justify-content: space-between;
`
const Info=styled.div`
   flex: 3;
`

const Product=styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail=styled.div`
 flex: 2;
 display: flex ;
`
const Image=styled.img`
  width: 200px;
  `
  const ProductAmountContainer=styled.div`
   display: flex;
   align-items: center;
  margin-bottom: 20px;
  `  
  const ProductAmount=styled.div`
   font-size: 24px;
   margin: 5px;

  ` 
   const ProductPrice=styled.div`
   font-size: 30px;
   font-weight: 200;
  `  
const Details=styled.div`
 padding: 20px;
 display: flex;
 flex-direction: column;
  height: 200px;
 justify-content: space-around;
 `
const ProductName=styled.span``
const ProductId=styled.span``
const ProductColor=styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50px;
   background-color: black;
  `
const ProductSize=styled.span``
const PriceDetail=styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 flex: 1;
`
  const Hr=styled.hr`
   background-color: #eee;
   border: none;
   height: 1px;
  `
const SummaryTitle=styled.h1`
    font-weight: 200;

`
const SummaryItem=styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: 200;
    font-size: 24px;
`
const SummaryItemText=styled.span`
   
`
const SummaryItemPrice=styled.span`
   
`
const Button=styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`
const Summary=styled.div`
    flex: 1;
    border: 0.5px solid black;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const Flex=styled.div`
   display: flex;
`
const Cart = () => {
  return (
    <Container>
         {/* <Navbar/> */}
          <Wrapper>
               <Title>YOUR BAG</Title>
                <Top>
                    <TopButton type='filled'>CONTINUE SHOPPING</TopButton> 
                    <TopTexts>
                    <Flex>
                     <TopText>Shopping Bag(2)</TopText>
                     <TopText>Your Wishlist(0)</TopText>
                    </Flex>
                    </TopTexts>
                    <TopButton>CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                  <Info> 
                     <Product>
                        <ProductDetail>
                           <Image src=''/>
                           <Details>
                              <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                              <ProductId><b>ID</b>23434O2234</ProductId>
                               <ProductColor/>
                              <ProductSize>
                              <b>Size:</b>37.5
                              </ProductSize>
                           </Details>
                        </ProductDetail>
                        <PriceDetail>
                        <ProductAmountContainer>
                           <Add/>
                           <ProductAmount>2</ProductAmount>
                           <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>300 Rs</ProductPrice>
                        </PriceDetail>
                     </Product>
                     <Hr/>
                     <Product>
                        <ProductDetail>
                           <Image src=''/>
                           <Details>
                              <ProductName><b>Product:</b>JESSIE THUNDER SHOES</ProductName>
                              <ProductId><b>ID</b>23434O2234</ProductId>
                               <ProductColor/>
                              <ProductSize><b>Size:</b>37.5</ProductSize>
                           </Details>
                        </ProductDetail>
                        <PriceDetail>
                        <ProductAmountContainer>
                           <Add/>
                           <ProductAmount>2</ProductAmount>
                           <Remove/>
                        </ProductAmountContainer>
                        <ProductPrice>300 Rs</ProductPrice>
                        </PriceDetail>
                     </Product>
                  </Info>
                  <Summary>
               <SummaryTitle> ORDER SUMMARY</SummaryTitle>   
                  <SummaryItem>
                     <SummaryItemText>Subtotal</SummaryItemText>
                     <SummaryItemPrice>$80</SummaryItemPrice>
                  </SummaryItem> 
                  <SummaryItem>
                     <SummaryItemText>Estimated Shipping</SummaryItemText>
                     <SummaryItemPrice>$5.90</SummaryItemPrice>
                  </SummaryItem>
                   <SummaryItem>
                     <SummaryItemText>Shipping Discount</SummaryItemText>
                     <SummaryItemPrice>-$5.99</SummaryItemPrice>
                  </SummaryItem>
                   <SummaryItem>
                     <SummaryItemText type='total'>Total</SummaryItemText>
                     <SummaryItemPrice>$800</SummaryItemPrice>
                  </SummaryItem>
                  <Button>CHECKOUT NOW</Button>
                  </Summary>
                </Bottom>
          </Wrapper>
         <Footer/>
    </Container>
  )
}

export default Cart