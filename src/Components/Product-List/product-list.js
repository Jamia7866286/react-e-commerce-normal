import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  AddProductItems,
  FilterSearchProduct,
  SearchProduct,
  SelectFilterProduct,
  SortPrice,
} from "../../assets/atoms/main.recoil";
import { ecommerce } from "../../firebase-config";
import HeaderComponent from "../../header";
import ProductCard from "./product-card";
import data from "../../assets/data/product_data.json";

import { set, ref } from "firebase/database";

const ProductList = () => {
  // Recoil state
  const [addProductAtom, setFilterData] = useRecoilState(FilterSearchProduct);
  const [searchText, setSearchText] = useRecoilState(SearchProduct);
  const [selectItem, setSelectItem] = useRecoilState(SelectFilterProduct);
  const [sortPriceData, setSortPriceData] = useRecoilState(SortPrice);

  // state variable
  const [clearBtnDisabled, setClearBtnDisabled] = useState(null);

  // ClearAllFilter search, select and price (sorting)
  const ClearAllFilter = () => {
    if (
      searchText.length ||
      selectItem !== "All" ||
      sortPriceData !== "Price"
    ) {
      setSearchText("");
      setSelectItem("All");
      setSortPriceData("Price");
      setClearBtnDisabled(true);
    }
  };

  useEffect(() => {
    if (
      searchText !== "" ||
      selectItem !== "All" ||
      sortPriceData !== "Price"
    ) {
      setClearBtnDisabled(false);
    } else {
      setClearBtnDisabled(true);
    }
  }, [searchText, selectItem, sortPriceData]);

  useEffect(() => {
    // ecommerce.push(data.products);
    // console.log("data get", "database", ecommerce);
    // ecommerce.push(
    //   set(ref(ecommerce, "/user"), {
    //     data: "Naseem",
    //     name: "ahmad",
    //   })
    // );
  }, []);

  return (
    <>
      <HeaderComponent />

      <div className="search-box my-5">
        <h1>Product List</h1>

        <div className="serach-input">
          <input
            className="form-control"
            type="text"
            placeholder="Search product"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <select
          className="form-select"
          aria-label="Default select example"
          value={selectItem}
          onChange={(e) => setSelectItem(e.target.value)}
        >
          <option value="All">All Product</option>
          <option value="kindle">Kindle</option>
          <option value="hardcover">Hardcover</option>
          <option value="paperback">Paperback</option>
        </select>

        <select
          className="form-select"
          aria-label="Default select example"
          value={sortPriceData}
          onChange={(e) => setSortPriceData(e.target.value)}
        >
          <option defaultValue>Price</option>
          <option value="low_price">Low to High</option>
          <option value="high_price">High to Low</option>
        </select>

        <button
          className="clear-filter btn btn-danger"
          onClick={ClearAllFilter}
          disabled={clearBtnDisabled}
        >
          Clear All
        </button>
      </div>

      {addProductAtom.length > 0 ? (
        <div className="product-list-main">
          {addProductAtom.map((productitem) => {
            return (
              <ProductCard productitem={productitem} key={productitem.id} />
            );
          })}
        </div>
      ) : (
        <h5 className="text-center my-5">No product find!</h5>
      )}
    </>
  );
};

export default ProductList;
