import React, { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { Error } from "./Error";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductAction,
  getAllProductsAction,
} from "../store/productSlicer";
export function ProductList() {
  const { products, errors, isLoading } = useSelector(
    (store) => store.productSlice
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAction());
  }, []);

  const deleteHandler = (productId) => {
    dispatch(deleteProductAction(productId));
  };
  return (
    <>
      {isLoading && <Loading></Loading>}
      {errors && <Error />}
      {!isLoading && !errors && (
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <Link to={`/products/${product.id}`}>
                    {" "}
                    <i className="fs-3 mx-1 text-warning bi bi-eye-fill"></i>
                  </Link>

                  <Link to={`/products/${product.id}/edit`}>
                    <i className="fs-3 mx-1 text-info bi bi-pencil-square"></i>
                  </Link>

                  <i
                    onClick={() => deleteHandler(product.id)}
                    className="fs-3 mx-1 text-danger bi bi-trash3-fill"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}
