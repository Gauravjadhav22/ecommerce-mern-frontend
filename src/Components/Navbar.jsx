import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import Profile from "./Profile";
import { useSelector, useDispatch } from "react-redux";
import { publicRequest } from "../requestMethods";
import { addsearchedProduct, } from "../redux/searchedPr";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between ${mobile({ padding: "10px 0px" })};
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  margin-left: 10px;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-left: 25px;
  height: 40px;
`;

const Input = styled.input`
margin-left:"50px"
  border: 2px solid lightgreen;
  width: 200px;
  height: 80%;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 25px;
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2px;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [productData, setProductData] = useState([]);
  const [query, setQuery] = useState("");
  const [disable, setDisable] = useState(false);
  const user = useSelector((state) => state.user.user.currentUser?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get("/products");
        console.log(res.data.allproducts);
        setProductData(res.data.allproducts);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const handleChange = async () => {
    // e.preventDefault();
    let prods;
    if (query !== "") {
      console.log(query);
      prods = productData.filter((product) => {
        console.log(product.title.toLowerCase().includes(query.toLowerCase()));
        return product.title.toLowerCase().includes(query.toLowerCase());
      });
    }
    console.log(prods);
    dispatch(addsearchedProduct(prods));
    setDisable(true);
    setTimeout(() => {
      setDisable(false);
      window.location.href = "/searched-products";
    }, 5000);
  };

  const handleKey = async (e) => {
    setQuery(e.target.value);
    console.log(e.key);
    console.log(query);
    if (e.key === "Enter") {
      handleChange();
    }
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input
              disabled={disable ? true : false}
              onKeyPress={handleKey}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search t-shirt shirt jacket hoodies .."
            />
            <Search
              disabled={disable ? true : false}
              onClick={handleChange}
              style={{ color: "black", fontSize: 40, cursor: "pointer" }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo>Clothing Store.</Logo>
          </NavLink>
        </Center>
        <Right>
          {user ? (
            <>
              {" "}
              <Profile />
            </>
          ) : (
            <>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/register"
              >
                <MenuItem>REGISTER</MenuItem>
              </NavLink>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/login"
              >
                <MenuItem>LOG IN</MenuItem>
              </NavLink>
            </>
          )}
          <NavLink to="/cart">
            <MenuItem style={{ marginRight: "14px" }}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined style={{ color: "black" }} />
              </Badge>
            </MenuItem>
          </NavLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
