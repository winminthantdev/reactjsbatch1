import React from "react";
import favicon from "../assets/img/fav/favicon.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      {/* <!-- Start Nav Bar --> */}
      <nav className="navbar navbar-expand-lg fixed-top">
        <Link to='/' className="navbar-brand text-light mx-3">
          <img src={favicon} width="70px" alt="favicon" />
          <span className="text-uppercase h2 fw-bold mx-2">
            Plannco <span className="h3">HOME DECORATION</span>
          </span>
        </Link>

        <button
          type="button"
          className="navbar-toggler navbuttons"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <div className="bg-light lines1"></div>
          <div className="bg-light lines2"></div>
          <div className="bg-light lines3"></div>
        </button>

        <div
          id="nav"
          className="navbar-collapse collapse justify-content-end text-uppercase fw-bold"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' className="nav-link max-2 menuitems">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/aboutus' className="nav-link max-2 menuitems">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/properties' className="nav-link max-2 menuitems">
                Properties
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/services' className="nav-link max-2 menuitems">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/customers' className="nav-link max-2 menuitems">
                Customer
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/furnitures' className="nav-link max-2 menuitems">
                Furniture
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/contacts' className="nav-link max-2 menuitems">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- End Nav Bar --> */}
    </div>
  );
};

export default Navbar;
