import React, { useEffect, useState } from "react";
import { SharedCard } from "../shared/SharedCard";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { addNewProduct, editProduct, getProductById } from "../API/productApi";
import { useDispatch } from "react-redux";
import { addProductAction, editProductAction } from "../store/productSlicer";

export function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    name: "",
    price: "",
  });

  useEffect(() => {
    if (id && id !== "0") {
      getProductById(id)
        .then((response) => {
          setFormValues(response.data);
        })
        .catch((error) => console.log(error));
    }
  }, [id]);

  const getInputValue = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (id == "0") {
      dispatch(addProductAction(formValues))
        .then(() => {
          navigate("/products");
        })
        .catch((error) => console.log(error));
    } else {
      dispatch(editProductAction({ id, product: formValues })).then(() => {
        navigate("/products");
      });
    }
  };
  return (
    <SharedCard
      title={`${id == 0 ? "Add New Product" : "Edit Product"} `}
      textColor={"text-muted text-center"}
    >
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              value={formValues.name}
              name="name"
              onChange={getInputValue}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Price"
              value={formValues.price}
              name="price"
              onChange={getInputValue}
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            {id == 0 ? "Add New Product" : "Edit Product"}
          </Button>
        </Form>
      </Container>
    </SharedCard>
  );
}
