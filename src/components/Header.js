import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

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
  {
    id: 4,
    name: "Cart",
    value: "/cart",
  },
];

const Header = () => {
  return (
    <div className="flex bg-blue-500 justify-between min-h-20 shadow-md shadow-gray-400">
      <div className="flex justify-between items-center px-6">
        <img className="w-10 h-10" alt="logo" src={logo} />
      </div>
      <div className="flex px-6">
        <ul className="flex justify-center items-center space-x-4 text-white">
          {navItem.map((item) => (
            <li key={item.id}>
              <Link className="text-lg" to={item.value}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
