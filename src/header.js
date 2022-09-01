import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import "./App.scss";
import { AddToCart } from "./assets/atoms/main.recoil";

const HeaderComponent = () => {
  const cartItem = useRecoilValue(AddToCart);

  const location = useLocation();

  const activeNavItem = (itemLink) => {
    let path = location.pathname;

    console.log("path", path);

    if (itemLink === path) {
      return "active";
    } else {
      return;
    }
  };

  const navList = [
    {
      Label: "Product",
      link: "/",
    },
    {
      Label: "Add Product",
      link: "/add-product",
    },
    {
      Label: "Cart",
      link: "/my-cart",
    },
  ];

  return (
    <ul className="navbar-top">
      {navList.map((item) => (
        <li key={item.link} className={activeNavItem(item.link)}>
          <Link to={item.link}>
            {item.Label}{" "}
            {item.link === "/my-cart" && (
              <span className="chip">{cartItem.length}</span>
            )}{" "}
          </Link>
        </li>
      ))}
      {/* <li>
        <Link to="/add-product">Add Product</Link>
      </li>
      <li>
        <Link to="/my-cart">
          Cart <span className="chip">{cartItem.length}</span>
        </Link>
      </li> */}
    </ul>
  );
};
export default HeaderComponent;
