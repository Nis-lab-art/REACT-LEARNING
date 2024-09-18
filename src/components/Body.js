import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    const response = await fetch("https://dummyapi.online/api/products");
    const json = await response.json();
    console.log(json);
    setProducts(json);
  };

  useEffect(() => {
    getData();
  }, []);

  if (products.length === 0) return <Shimmer />;

  return (
    <div className="body-container">
      <div className="filter-btn">
        <button
          className="top-res-btn"
          onClick={() => {
            let topRes = products.filter((item) => item.basePrice <= 999);
            setProducts(topRes);
          }}
        >
          Cheap Product
        </button>
      </div>
      <div className="res-container">
        {products.map((item) => (
          <ProductCard key={item.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
