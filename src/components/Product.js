import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../utils/useFetchData";

const Product = () => {
  const { pid } = useParams();
  const product = useFetchData(pid);

  if (!product) return <h1>Loading...</h1>;
  return (
    <div className="border-2 border-gray-400 m-4 p-4">
      <h1 className="text-xl font-bold">{product.name}</h1>
      <p className="text-lg font-bold">Brand: {product.brand}</p>
      <img alt="res-image" src={product.thumbnailImage} />
      <p className="text-lg">{product.description}</p>
      <h3 className="text-lg">Rs. {product.basePrice}</h3>
    </div>
  );
};

export default Product;
