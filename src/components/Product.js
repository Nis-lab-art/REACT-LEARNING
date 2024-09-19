import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState();

  const getDataById = async () => {
    const res = await fetch(`https://dummyapi.online/api/products/${pid}`);
    const json = await res.json();
    console.log(json);
    setProduct(json);
  };
  useEffect(() => {
    getDataById();
  }, []);

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
