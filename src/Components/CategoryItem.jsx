import styled from "styled-components";
import { mobile } from "../responsive";
import { NavLink } from "react-router-dom";
const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
  ${mobile({marginTop:"25px"})}

`;

const Image = styled.img`
border-radius:80%;
border:1px dashed blue;
margin:2px;
  width: 95%;
  height: 84%;
  object-fit: cover;
  ${mobile({marginTop:"25px",marginBottom:"25px", height: "20vh" })}

  `;

const Info = styled.div`
  position: absolute;
  font-size: 12px;
  top: 50px;
  left: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({fontSize:"8px"})}

`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <NavLink to={`/productList/${item.cat}`} >
      <Image src={item.img} />
      <Info>
        <Title style={{background:"black"}}>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </NavLink>
    </Container>
  );
};

export default CategoryItem;
