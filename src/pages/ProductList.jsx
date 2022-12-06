import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
 const Container=styled.div`
    

 `
 const FilterContainer=styled.div`
     display: flex;
     justify-content: space-between;
 `
 const Title=styled.div`
  margin: 20px;
  font-weight: 400;
  font-size: 40px;
 `
 const Filter=styled.div`
    margin: 20px;
 `
 const FilterText=styled.span`
    font-size: 20px;
    font-weight: 400;
    margin-right: 20px;
 `
  const Select=styled.select`
     padding: 10px;
     margin-right: 20px;
  `
  const Option=styled.option`
    
  `
const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
        <Filter>
        <FilterText>Filter Products :</FilterText>
        <Select>
             <Option disabled selected > Color</Option>
             <Option> White</Option>
             <Option> Black</Option>
             <Option> Red</Option>
             <Option> Blue</Option>
             <Option> Yellow</Option>
             <Option> Green</Option>
        </Select> 
           <Select>
             <Option disabled selected >Size</Option>
             <Option> XS</Option>
             <Option> S</Option>
             <Option> M</Option>
             <Option> L</Option>
             <Option> XL</Option>
        </Select>
        </Filter>     
        <Filter>
        <FilterText>Sort Products</FilterText>
        <Select>
             <Option  selected >Newest</Option>
             <Option> Price(asc)</Option>
             <Option> Price(desc)</Option>
        </Select>
        </Filter>     
        </FilterContainer>
        <Products/>
        <Footer/>
    </Container>
  )
}

export default ProductList