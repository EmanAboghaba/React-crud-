import React, { useEffect, useState } from "react";
import { SharedButton } from "../styledComponent/SharedComponent";

export function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState("");

  const getAllProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setFiltered(data);
      const cats = ["all", ...new Set(data.map((item) => item.category))];
      setCategories(cats);
    } catch (error) {
      setErrors(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    let result = [...products];

    if (category !== "all") {
      result = result.filter((p) => p.category === category);
    }

    setFiltered(result);
  }, [category, products]);

  return (
    <section className="section-padding">
      {loading && (
        <h3 className="alert alert-info text-center">Loading products...</h3>
      )}
      {!loading && errors && (
        <h1 className="alert alert-danger text-center">{errors}</h1>
      )}
      {!loading && !errors && (
        <div className="container">
          <h2 className="text-center mb-4">Our Products</h2>

          <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
            <select
              className="form-select w-auto"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((cat, idx) => (
                <option value={cat} key={idx}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="row">
            {filtered.map((product) => (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card h-100 text-center">
                  <img
                    src={product.image}
                    className="card-img-top p-4"
                    alt={product.title}
                    style={{ height: "250px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                      {product.description.slice(0, 100)}...
                    </p>
                    <h6 className="text-warning">${product.price}</h6>
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <SharedButton className="btn btn-warning">
                      Buy Now
                    </SharedButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
