import React from "react";
//rafce

const ProductItem = ({ prod }) => {
  return (
    <div>
      <h1> {prod.name}</h1>
      <h2>{prod.price}</h2>
      <img src={prod.image} />
    </div>
  );
};

export default ProductItem;
