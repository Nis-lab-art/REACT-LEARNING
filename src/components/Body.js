import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productCat, setProductCat] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleProductCategory = (e) => {
    let newCategory = e.target.value;
    setProductCat(newCategory);
    let res = products.filter((item) => item.productCategory === newCategory);
    setFilteredProducts(res);
  };

  const getData = async () => {
    const response = await fetch("https://dummyapi.online/api/products");
    const json = await response.json();
    console.log(json);
    setProducts(json);
    setFilteredProducts(json);
  };

  useEffect(() => {
    getData();
  }, []);

  if (products.length === 0) return <Shimmer />;

  return products.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-options">
        <div className="search-filter">
          <input
            type="text"
            className="search-input"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const res = products.filter((item) =>
                item?.name?.toLowerCase().includes(searchValue?.toLowerCase())
              );
              setFilteredProducts(res);
            }}
          >
            Search
          </button>
        </div>
        <div className="category-filter">
          {" "}
          <label>Choose a car:</label>
          <select
            name="cars"
            className="select"
            onChange={handleProductCategory}
          >
            <option value="">Select a category...</option>
            <option value="Smartphone">Smartphone</option>
            <option value="Tablet">Tablet</option>
            <option value="Laptop">Laptop</option>
          </select>
        </div>
        <div>
          {" "}
          <button
            className="top-res-btn"
            onClick={() => {
              let topRes = products.filter((item) => item.basePrice <= 999);
              setFilteredProducts(topRes);
            }}
          >
            Cheap Product
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
