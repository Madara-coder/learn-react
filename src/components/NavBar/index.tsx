import { Link } from "react-router-dom";
import "./style.css";

const navUrl = [
  {
    title: "Home",
    slug: "home",
    url: "/",
  },
  {
    title: "Product",
    slug: "product",
    url: "/products",
  },
  {
    title: "About Us",
    slug: "about-us",
    url: "/about-us",
  },
  {
    title: "Contacts",
    slug: "contacts",
    url: "/contacts",
  },
  {
    title: "Sign Out",
    slug: "sign-out",
    url: "/sign-out",
  },
];

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul>
        {navUrl.map((item) => {
          return (
            <li key={item.slug}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
