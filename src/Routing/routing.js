import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../Components/Add-Product/add-product";
import MyAddress from "../Components/My-Address/my-address";
import MyCart from "../Components/My-Cart/my-cart";
import ProductDetails from "../Components/Product-List/Product-Details/product-details";
import ProductList from "../Components/Product-List/product-list";

const NavbarRoutingComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/my-cart" element={<MyCart />} />
      <Route path="/address" element={<MyAddress />} />
    </Routes>
  );
};

export default NavbarRoutingComponent;
