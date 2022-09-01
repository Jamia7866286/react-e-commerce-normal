import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import * as yup from "yup";
import { AddProductItems } from "../../assets/atoms/main.recoil";
import GoBack from "../../BackButton/GoBack";

const AddProduct = () => {
  const [addProductAtom, setAddProductAtom] = useRecoilState(AddProductItems);
  let navigate = useNavigate();

  let ValidationSchema = yup.object().shape({
    name: yup.string().required("Please fill this field!"),
    price: yup.string().required("Please fill this field!"),
    description: yup.string().required("Please fill this field!"),
    img: yup.string().url().required("Please fill this field!"),
    quantity: yup.string().required("Please fill this field!"),
    type: yup.string().required("Please fill this field!"),
    // file: yup.string().required("Please fill this field!"),
  });

  const initialValue = {
    name: "",
    price: "",
    quantity: "",
    description: "",
    img: "",
    id: Math.floor(Math.random() * 10000),
    product_cart_count: 1,
    type: "",
    // file: "",
  };

  const { handleChange, handleSubmit, values, errors, touched, setFieldValue } =
    useFormik({
      initialValues: initialValue,
      validationSchema: ValidationSchema,
      onSubmit: (values) => {
        alert("Your product added successfully!");
        setAddProductAtom((prev) => {
          return [values, ...prev];
        });
        navigate("/");
      },
    });

  return (
    <>
      <GoBack url={"/"} />

      <h1 className="my-5 text-center">Add Product</h1>
      <div className="w-50 mx-auto mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Product Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter product name"
              id="exampleInputEmail1"
              name="name"
              onChange={handleChange}
              value={values.name}
            />

            {touched.price && errors.name && (
              <div className="alert alert-danger" role="alert">
                {errors.name}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter price"
              name="price"
              value={values.price}
              onChange={handleChange}
            />
            {touched.price && errors.price && (
              <div className="alert alert-danger" role="alert">
                {errors.price}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              Quantity
            </label>
            <input
              type="text"
              className="form-control"
              id="quantity"
              placeholder="Enter quantity"
              name="quantity"
              value={values.quantity}
              onChange={handleChange}
            />
            {touched.quantity && errors.quantity && (
              <div className="alert alert-danger" role="alert">
                {errors.quantity}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword3" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword3"
              placeholder="Enter description"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
            {touched.price && errors.description && (
              <div className="alert alert-danger" role="alert">
                {errors.description}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Product Type</label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handleChange}
              name="type"
              value={values.type}
            >
              <option defaultValue>Select product type</option>
              <option value="kindle">Kindle</option>
              <option value="hardcover">Hardcover</option>
              <option value="paperback">Paperback</option>
            </select>

            {touched.type && errors.type && (
              <div className="alert alert-danger" role="alert">
                {errors.type}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword4" className="form-label">
              Image Url
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword4"
              placeholder="Enter image url"
              name="img"
              value={values.img}
              onChange={handleChange}
            />
            {touched.price && errors.img && (
              <div className="alert alert-danger" role="alert">
                {errors.img}
              </div>
            )}
          </div>

          {/* <div className="mb-3">
            <label className="form-label">Upload PDF</label>
            <input
              type="file"
              className="form-control"
              name="file"
              onChange={(e) => {
                setFieldValue("file", e);
              }}
            />
          </div> */}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
