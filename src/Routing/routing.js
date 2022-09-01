import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../Components/Add-Product/add-product";
import MyAddress from "../Components/My-Address/my-address";
import MyCart from "../Components/My-Cart/my-cart";
import ProductDetails from "../Components/Product-List/Product-Details/product-details";
import ProductList from "../Components/Product-List/product-list";
import UploadPDF from "../Components/Upload-PDF/upload-pdf";

const NavbarRoutingComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/add-product" element={<AddProduct />} />
      <Route path="/my-cart" element={<MyCart />} />
      <Route path="/address" element={<MyAddress />} />
      <Route path="/upload" element={<UploadPDF />} />
    </Routes>
  );
};

export default NavbarRoutingComponent;
