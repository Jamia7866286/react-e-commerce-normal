import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { AddToCart, TotalPrice } from "../../assets/atoms/main.recoil";
import { CourencyConvertor } from "../../const/courency-convertor";
import HeaderComponent from "../../header";
import AmountDetailsCard from "../Amount-Details-Card/amount-details-card";
import MyAddress from "../My-Address/my-address";
import MyCartCard from "./my-cart-card";

const MyCart = () => {
  const [cartItem, setCartItems] = useRecoilState(AddToCart);
  const [cartTotalPrice, setCartTotalPrice] = useRecoilState(TotalPrice);

  const [addressComponent, setAddressComponent] = useState(false);

  useEffect(() => {
    let price = 0;
    cartItem.forEach((element) => {
      price = price + element.price * element.product_cart_count;
    });
    setCartTotalPrice(price);
  }, [cartItem]);

  return (
    <>
      <HeaderComponent />
      <div className="cart-main-box">
        {!addressComponent ? (
          <div className="product-list-main cart-list-main">
            {cartItem?.length !== 0 ? (
              cartItem.map((item) => <MyCartCard key={item.id} item={item} />)
            ) : (
              <div className="cart-no-data">
                <p>No data Found!</p>
                <div className="continue-shop">
                  <Link to="/">Continue Shopping</Link>
                </div>
              </div>
            )}
          </div>
        ) : (
          <MyAddress />
        )}

        {cartItem?.length !== 0 && (
          <div className="buy-main">
            <div className="item-box">
              <h6>Total Amount : </h6>
              <h5>{CourencyConvertor(cartTotalPrice)}</h5>
            </div>
            <div className="item-box" style={{ border: 0 }}>
              <h6>Shipping :</h6>
              <h5 style={{ color: "green" }}>Free</h5>
            </div>

            <button
              type="button"
              className="btn btn-primary btn-md w-100"
              onClick={() => {
                setAddressComponent(true);
              }}
            >
              Cash On Delievery
            </button>
            <div className="continue-shop">
              <Link to="/">Continue Shopping</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MyCart;
