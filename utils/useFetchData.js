import { useEffect, useState } from "react";

const useFetchData = (pid) => {
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

  return product;
};

export default useFetchData;
