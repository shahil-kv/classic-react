
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

const Container=styled.div`
  flex: 1;
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
  position: relative;
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

const Product=({item})=>{
  return (
     <Container>
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
     </Container>
  )
}
export default Product