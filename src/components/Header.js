import { useState, useContext } from "react";
import Logo from "../assets/img/food-house.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Title = () => {
  return (
    <a href="/">
      <img data-testid="logo" className="h-36 p-4" alt="logo" src={Logo}></img>
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <div className="flex justify-between  bg-red-50 text-xl shadow-md ">
      <Title />

      <div>
        <ul className="font-nunito  flex mt-12 ">
          <Link to="/">
            <li className="px-4 hover:bg-red-200" key="l1">
              Home
            </li>
          </Link>

          <Link to="/about">
            <li className="px-4 hover:bg-red-200" key="l1">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="px-4 hover:bg-red-200" key="l1">
              Contact
            </li>
          </Link>
          <Link to="/instamart">
            <li className="px-4 hover:bg-red-200" key="l1">
              Instamart
            </li>
          </Link>

          <Link to="/cart">
            <li data-testid="cart" className="px-4 hover:bg-red-200" key="l1">
              Cart - {cartItems.length}
            </li>
          </Link>
        </ul>
      </div>
      <h1 data-testid="online-status">{isOnline ? "🟢" : "🔴"}</h1>
      <span>{user.name}</span>
      {isLoggedIn ? (
        <button className="pr-4" onClick={() => setIsLoggedIn(false)}>
          {" "}
          Logout{" "}
        </button>
      ) : (
        <button className="pr-4" onClick={() => setIsLoggedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
