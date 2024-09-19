import { Link } from "react-router-dom";

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
    <div className="header">
      <img
        className="logo"
        alt="logo"
        src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
      />
      <div className="nav-container">
        <ul className="nav-items">
          {navItem.map((item) => (
            <li key={item.id}>
              <Link
                to={item.value}
                style={{ textDecoration: "none", color: "inherit" }}
              >
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
