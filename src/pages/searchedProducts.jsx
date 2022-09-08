import React, { useState } from "react";
import Styled from "styled-components";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Product from "../Components/Product";
import { useSelector, useDispatch } from "react-redux";
const Container = Styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const SearchedPr = () => {
  //  products=[]
  // useEffect(() => {
    const products = useSelector((state) => state.user.searchedPr.products);
  // }, []);

  console.log(products);
  return (
    <>
      <Navbar />
      <Container>
        {products.length>0 ? (
          products.map((product) => {
            return <Product item={product} key={product._id} />;
          })
        ) : (
          <h1>No products were found!..</h1>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default SearchedPr;
