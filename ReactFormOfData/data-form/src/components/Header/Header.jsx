import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import CartButton from "../Header/CartButton";
import "./Header.css";
const Header = () => {
  return (
    <header>
      {/*<h2>Online Shopping</h2>
      <div>
        <CartButton />
      </div>*/}

      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <Link className="navbar-brand" to="#">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ml-3">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item ml-3">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item ml-3">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ml-3">
                <Link className="nav-link" to="/details">
                  <CartButton />
                </Link>
              </li>
              {/*<li className="nav-item ml-3">
                <a className="nav-link" href="">
                  Contact
                </a>
              </li>
              <li className="nav-item ml-3">
                <a className="nav-link" href="Login.html">
                  Login
                </a>
              </li>
              <li className="nav-item ml-3">
                <a className="nav-link" href="Login.html">
                  Register
  </a>
              </li>*/}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
