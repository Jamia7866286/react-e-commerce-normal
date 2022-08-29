import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { AddProductItems } from "../../../assets/atoms/main.recoil";
import GoBack from "../../../BackButton/GoBack";
import { CourencyConvertor } from "../../../const/courency-convertor";

const ProductDetails = () => {
  const productDetails = useRecoilValue(AddProductItems);

  const { id } = useParams();

  const [productDetailsData, setProductDetailsData] = useState({});

  useEffect(() => {
    const getMatchProduct = productDetails.filter((items) => {
      return items.id === +id;
    });
    setProductDetailsData(...getMatchProduct);
  }, []);

  return (
    <>
      <GoBack url={"/"} />
      <h1 className="my-5">Product Details</h1>
      <div className="w-100 mx-auto mt-5">
        <div className="d-flex">
          <div className="flex-shrink-0">
            <img
              src={productDetailsData.img}
              alt={productDetailsData.name}
              className="img-fluid"
              style={{ width: "400px" }}
            />
          </div>
          <div className="flex-grow-1 ms-3">
            <h2>
              {productDetailsData.name}{" "}
              <span className="chip">
                <span className="chip">
                  {CourencyConvertor(productDetailsData.price)}
                </span>
              </span>
            </h2>
            <p style={{ fontSize: "20px" }}>{productDetailsData.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
