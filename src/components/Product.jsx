
import styled from "styled-components";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { HeartBroken, SearchOutlined } from "@mui/icons-material";


const Info = styled.div`
 opacity: 0;
 width: 100%;
 height: 100%;
 position: absolute;
 top: 0;
 left: 0;
 background-color: rgba(0,0,0,0.2);
 z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Title=styled.h3`
 margin-top: 10px;
 width: 200px;
`
const Price=styled.h5`
width: 200px;
 margin-bottom: 70px;
`
const Scontainer=styled.div`
 position: relative;
flex: 1;
   margin: 0px 50px 0px 0px;
  min-width: 450px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:  #f5f7fa;
  &:hover ${Info}{
   opacity: 1;
  }
  position: relative;
`
const Container=styled.div`
  /* flex: 1;
   margin: 0px 50px 60px 0px;
  min-width: 350px;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color:  #e9f5f5;
  &:hover ${Info}{
   opacity: 1;
  }
  position: relative; */
`
const Image = styled.img`
  height: 75%;
  z-index: 2;
`;
const Circle = styled.div`
 width: 200px;
 height: 200px;
 border-radius: 50%;
 background-color: white;
 position: absolute;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;
// const BtnBuy=styled.button`
//    padding: 5px 15px;
//    border-radius: 5px;
//    background-color: #ec3b3b;
//    color:white;
//    border: none;
//    left: 1000px;
// `
const Product=({item})=>{
  return (
     <Container>
      <Scontainer>

       <Circle />
       <Image src={item.img} />
       <Info>
         <Icon>
           <ShoppingCartRoundedIcon />
         </Icon>
  
         <Icon>
           <SearchOutlined />
         </Icon>

         <Icon>
           <HeartBroken />
         </Icon>
    </Info>
      </Scontainer>
       {/* <BtnBuy>Buy Now</BtnBuy> */}
       <Title>{item.title}</Title>
       <Price>{item.price}</Price>
     </Container>
  )
}
export default Product