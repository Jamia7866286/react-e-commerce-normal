import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "./App.scss";
import { AddToCart } from "./assets/atoms/main.recoil";

const HeaderComponent = () => {
  const cartItem = useRecoilValue(AddToCart);

  return (
    <ul className="navbar-top">
      <li>
        <Link to="/">Product</Link>
      </li>
      <li>
        <Link to="/add-product">Add Product</Link>
      </li>
      <li>
        <Link to="/my-cart">
          Cart <span className="chip">{cartItem.length}</span>
        </Link>
      </li>
    </ul>
  );
};
export default HeaderComponent;
