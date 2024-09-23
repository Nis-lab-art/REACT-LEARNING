import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useSelector } from "react-redux";

const navItem = [
  {
    id: 1,
    name: "Home",
    value: "/",
  },
  {
    id: 2,
    name: "About Us",
    value: "/about",
  },
  {
    id: 3,
    name: "Contact",
    value: "/contact",
  },
];

const Header = () => {
  const cartItem = useSelector((state) => state.cart.items);
  console.log(cartItem);

  return (
    <div className="flex bg-blue-500 justify-between min-h-20 shadow-md shadow-gray-400">
      <div className="flex justify-between items-center px-6">
        <img className="w-10 h-10" alt="logo" src={logo} />
      </div>
      <div className="flex px-6 space-x-4">
        <ul className="flex justify-center items-center space-x-4 text-white">
          {navItem.map((item) => (
            <li key={item.id}>
              <Link className="text-lg" to={item.value}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center space-x-4 text-white">
          <Link className="text-lg" to={"/cart"}>
            <p className="">Cart: {cartItem.length} Items</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
