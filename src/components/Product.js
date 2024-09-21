import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../utils/useFetchData";

const Product = () => {
  const { pid } = useParams();
  const product = useFetchData(pid);

  if (!product) return <h1>Loading...</h1>;
  return (
    <div>
      <h1>{product.name}</h1>
      <p>Brand: {product.brand}</p>
      <img alt="res-image" src={product.thumbnailImage} />
      <p>{product.description}</p>
      <h3>Rs. {product.basePrice}</h3>
    </div>
  );
};

export default Product;
