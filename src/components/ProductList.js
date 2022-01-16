import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ prods }) => {
  return (
    <div>
      {prods.map((x) => (
        <ProductItem prod={x} />
      ))}
    </div>
  );
};

export default ProductList;
