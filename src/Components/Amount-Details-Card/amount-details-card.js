import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CourencyConvertor } from "../../const/courency-convertor";

const AmountDetailsCard = ({ cartTotalPrice, setAddressComponent }) => {
  return (
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
  );
};

export default AmountDetailsCard;
