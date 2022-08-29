import React from "react";
import { useRecoilState } from "recoil";
import { AddToCart } from "../../assets/atoms/main.recoil";
import { CourencyConvertor } from "../../const/courency-convertor";

const MyCartCard = ({ item }) => {
  const [cartItem, setCartItems] = useRecoilState(AddToCart);

  const CharacterSet = (description, chrCount) => {
    if (description.length > chrCount)
      return `${description.slice(0, chrCount)} ...`;
    else {
      return description;
    }
  };

  const itemCountIncrease = (id) => {
    setCartItems((prev) => {
      const filtered = prev.filter((obj) => obj.id === id);
      const nonfiltered = prev.filter((obj) => obj.id !== id);

      console.log("filtered", filtered, "non-filter : ", nonfiltered);

      let final = {
        ...filtered[0],
        product_cart_count: filtered[0].product_cart_count + 1,
      };
      return [final, ...nonfiltered];
    });
  };

  const itemCountDecrement = (id) => {
    setCartItems((prev) => {
      const filter = prev.filter((item) => item.id === id);
      const nonfilter = prev.filter((item) => item.id !== id);

      const final = {
        ...filter[0],
        product_cart_count: filter[0].product_cart_count - 1,
      };

      return [final, ...nonfilter];
    });
  };

  // Delete cart item
  const DeleteCartItem = (id) => {
    let deletedItemGet = cartItem.filter((item) => item.id !== id);
    setCartItems(deletedItemGet);
  };

  return (
    <>
      <div className="d-flex card-box" id={item.id}>
        <div className="flex-shrink-0">
          <img src={item.img} />
        </div>
        <div className="flex-grow-1 ms-3">
          <div>
            <strong>
              {CharacterSet(item.name, 25)}
              <span className="chip">
                {CourencyConvertor(item.price * item.product_cart_count)}
              </span>
            </strong>
          </div>
          <div style={{ fontSize: "12px", margin: "8px 0" }}>
            {CharacterSet(item.description, 60)}
          </div>

          <div className="quantity-box">
            <div className="item-count">
              <button
                className="decriment-box"
                onClick={() => {
                  itemCountDecrement(item.id);
                }}
                disabled={+item.product_cart_count === 1}
              >
                -
              </button>
              <span>{item.product_cart_count}</span>
              <button
                className="decriment-box"
                onClick={() => {
                  itemCountIncrease(item.id);
                }}
                disabled={+item.quantity === +item.product_cart_count}
              >
                +
              </button>
            </div>

            <div
              className="delete-cartitem"
              onClick={() => {
                DeleteCartItem(item.id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#dc3545"
                className="bi bi-trash3-fill"
                viewBox="0 0 16 16"
              >
                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
              </svg>
            </div>
            <div className="quantity-item">Stock : {+item.quantity}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCartCard;
