import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RouteError from "./components/RouteError";
import Product from "./components/Product";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div>
      <Provider store={appStore}>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </Provider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:pid",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <RouteError />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
