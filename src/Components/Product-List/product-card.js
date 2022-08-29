import React from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { AddToCart } from "../../assets/atoms/main.recoil";
import { CourencyConvertor } from "../../const/courency-convertor";

const ProductCard = ({ productitem }) => {
  const { img, name, description, price, id } = productitem;

  const [cartItems, setCartItem] = useRecoilState(AddToCart);

  const CharacterSet = (description, chrCount) => {
    if (description?.length > chrCount) {
      return `${description.slice(0, chrCount)} ...`;
    } else {
      return description;
    }
  };

  return (
    <div className="d-flex card-box">
      <div className="flex-shrink-0">
        <img src={img} alt="image" />
      </div>
      <div className="flex-grow-1 ms-3">
        <div>
          <strong>
            {CharacterSet(name, 25)}
            <span className="chip">{CourencyConvertor(price)}</span>
          </strong>
        </div>
        <div style={{ fontSize: "12px", margin: "8px 0" }}>
          <Link to={`product/${id}`} style={{ color: "inherit" }}>
            {CharacterSet(description, 60)}
          </Link>
        </div>
        <div style={{ textAlign: "right" }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => {
              setCartItem((prev) => [productitem, ...prev]);
            }}
            disabled={cartItems.filter((obj) => obj.id === id).length > 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
