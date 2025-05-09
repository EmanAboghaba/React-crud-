import React from "react";
import { SharedCard } from "../shared/SharedCard";
import { ProductsHeader } from "../components/ProductsHeader";
import { ProductList } from "../components/ProductList";

export function Products() {
  return (
    <SharedCard
      title="Our Products"
      textColor="text-muted text-center"
      header={<ProductsHeader></ProductsHeader>}
    >
      <ProductList></ProductList>
    </SharedCard>
  );
}
