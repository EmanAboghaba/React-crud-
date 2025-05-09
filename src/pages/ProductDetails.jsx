import { useEffect, useState } from "react";
import { SharedCard } from "../shared/SharedCard";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { products } = useSelector((store) => store.productSlice);

  useEffect(() => {
    setProduct(products.find((product) => product.id == id));
  }, []);

  return (
    <SharedCard
      className={"alert alert-light text-light"}
      title={`Product Details ${product?.id}`}
      textColor={"text-info"}
    >
      <p className="lead fs-4 mt-3 text-dark">
        Product Name : <strong>{product?.name}</strong>
      </p>
      <p className="lead fs-4 mt-3 text-dark">
        Product Price : <strong>{product?.price} $</strong>
      </p>
      <Link to={"/products"} className="btn btn-dark mt-5">
        Back to Products
      </Link>
    </SharedCard>
  );
}
