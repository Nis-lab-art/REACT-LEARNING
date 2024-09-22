import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
    <div className="mt-6 mb-10 space-y-10">
      <div className="flex justify-around">
        <div className="space-x-2">
          <input
            type="text"
            className="border-2 border-gray-500 bg-white px-5 pr-16 h-10 rounded-lg text-sm focus:outline-none focus:border-gray-400"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
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
        <div className="space-x-2">
          {" "}
          <label className="text-gray-700 text-lg font-bold mb-2">
            Choose a car:
          </label>
          <select
            name="cars"
            className="border-2 border-gray-500 h-10 rounded-lg"
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
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              let topRes = products.filter((item) => item.basePrice <= 999);
              setFilteredProducts(topRes);
            }}
          >
            Cheap Product
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-around space-y-4">
        {filteredProducts.map((item) => (
          <Link key={item.id} to={"/product/" + item.id}>
            <ProductCard resData={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
