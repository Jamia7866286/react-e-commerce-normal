import { atom, selector } from "recoil";
import data from "../data/product_data.json";

// Add product into cart
export const AddToCart = atom({
  key: "add_to_cart",
  default: [],
});

// Add Product
export const AddProductItems = atom({
  key: "add_product",
  default: data.products,
});

// search filter product
export const SearchProduct = atom({
  key: "search_product",
  default: "",
});

// select filter product
export const SelectFilterProduct = atom({
  key: "select_product",
  default: "All",
});

// Price sorting product
export const SortPrice = atom({
  key: "sort_price",
  default: "Price",
});

// filter search product data
export const FilterSearchProduct = selector({
  key: "filter_search_product",
  get: ({ get }) => {
    const productList = get(AddProductItems);
    const searchText = get(SearchProduct);
    const selectedItem = get(SelectFilterProduct);
    const sortPrice = get(SortPrice);

    let filterdata = [];

    if (searchText.length || selectedItem.length || sortPrice.length) {
      filterdata = productList
        .filter((item) =>
          item.name.toLowerCase().includes(searchText.toLowerCase())
        )
        .filter((selectItemData) => {
          if (selectedItem === "All") {
            return AddProductItems;
          } else {
            return selectItemData.type === selectedItem;
          }
        })
        .sort((a, b) => {
          if (sortPrice === "low_price") {
            return a.price - b.price;
          } else if (sortPrice === "high_price") {
            return b.price - a.price;
          }
        });

      return filterdata;
    } else {
      return AddProductItems;
    }
  },
});

// Total Cart item price
export const TotalPrice = atom({
  key: "total_price",
  default: 0,
});

// Address
export const AddressData = atom({
  key: "address_data",
  default: {
    address:
      "Batla House,Near Royal Biryani Jamia Nagar Okhla New Delhi pin-110025",
    phone: "+919654775378",
  },
});
