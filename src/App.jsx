import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import PaymentSuccess from "./pages/Success";
import NotFound from "./pages/NotFound";
import { useSelector } from "react-redux";
import SearchedPr from "./pages/searchedProducts";
const App = () => {
  const user = useSelector((state) => state.user.user.currentUser) || undefined;
  // console.log(user, "is user");
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cat-products" element={<ProductList />} />
        <Route path="/searched-products" element={<SearchedPr />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productList/:category" element={<ProductList />} />
        <Route path="*" element={<NotFound />} />
        
        {user ? (
          <>
            {" "}
            <Route path="/orders" element={<Orders />} />
            <Route path="/success" element={<PaymentSuccess />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/Register" element={<Register />} />)
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
