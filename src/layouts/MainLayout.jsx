import React from "react";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { ProductDetails } from "../pages/ProductDetails";
import { ProductForm } from "../pages/ProductForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { SharedLayout } from "./SharedLayout";

export function MainLayout() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetails />} />
            <Route path="products/:id/edit" element={<ProductForm />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
