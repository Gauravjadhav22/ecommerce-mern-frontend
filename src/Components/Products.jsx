import { popularProducts } from "../data";
import Styled from "styled-components";
import Product from "./Product";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
const Container = Styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat ? `/products?category=${cat}` : "/products"
        );
        if (isMounted) setProducts(res.data);
      } catch (error) {}
    };
    getProducts();

    
    return () => { isMounted = false };

  }, [cat]);
  useEffect(() => {
    let isMounted = true;
    cat &&
      setFilterProducts(
        products?.allproducts?.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
          // item.allproducts.categories[0]===cat
        )
      );

  return () => { isMounted = false };
  }, [filters]);
  useEffect(() => {
    if (sort === "newest") {
      setFilterProducts((prev) =>
        [prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilterProducts((prev) => [prev].sort((a, b) => a.price - b.price));
    } else {
      setFilterProducts((prev) => [prev].sort((a, b) => b.price - a.price));
    }
    return () => {};
  }, [sort]);
  return (
    <Container>
      {cat
        ? filterProducts.map((item) => <Product item={item} key={item._id} />)
        : products?.allproducts?.map((item) => 
{
  return <Product item={item} key={item._id} />}

          )}
    </Container>
  );
};

export default Products;
