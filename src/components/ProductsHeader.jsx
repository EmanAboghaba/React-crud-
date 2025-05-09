import React from "react";
import { Link } from "react-router-dom";

export function ProductsHeader() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5">
          <Link to="0/edit" className="btn btn-outline-dark">
            Add New Product
          </Link>
        </div>
        <div className="col-sm-7 d-flex justify-content-end">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search ...."
          />
        </div>
      </div>
    </div>
  );
}
