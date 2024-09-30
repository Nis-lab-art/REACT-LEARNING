import "./App.css";
import axios from "axios";
import { useEffect, useReducer } from "react";
import { createReducer } from "./reducers/createReducer";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [state, dispatch] = useReducer(createReducer, {
    products: [],
    cart: [],
  });

  const getProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data.products,
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
