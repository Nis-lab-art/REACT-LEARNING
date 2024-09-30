import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../../utils/useFetchData";
import Specs from "./Specs";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";

const Product = () => {
  const { pid } = useParams();
  const product = useFetchData(pid);
  const dispatch = useDispatch();

  if (!product) return <h1>Loading...</h1>;
  return (
    <div className="m-4 p-4 space-y-2">
      <p className="text-sm text-slate-500">Brand: {product.brand}</p>
      <h1 className="text-lg font-bold">{product.name}</h1>
      <img alt="prd-image" src={product.thumbnailImage} />
      <p className="text-lg">{product.description}</p>
      <p className="text-lg font-semibold">Rs.{product.basePrice}</p>
      <div>
        <label className="text-md font-bold">Specifcation</label>
        <Specs product={product} />
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(addItem(product))}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
