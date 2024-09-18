import { Link } from "react-router-dom";

const navItem = [
  {
    name: "Home",
    value: "/",
  },
  {
    name: "About Us",
    value: "/about",
  },
  {
    name: "Contact",
    value: "/contact",
  },
  {
    name: "Cart",
    value: "/cart",
  },
];

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        alt="logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
      />
      <div className="nav-container">
        <ul className="nav-items">
          {navItem.map((item) => (
            <li>
              <Link to={item.value}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
