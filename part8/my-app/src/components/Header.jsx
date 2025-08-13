import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <NavLink to='/'>
            <h3>React Router Exercise</h3>
          </NavLink>
          <nav>
            <ul>
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/product/1001"}>Product</NavLink>
              </li>
              <li>
                <NavLink to={"/newletter"}>NewLetter</NavLink>
              </li>
              <li>
                <NavLink to={"/donate"}>Donate</NavLink>
              </li>
              <li>
                <NavLink to={"/product/redbull/1101"}>Product Detail</NavLink>
              </li>
              <li>
                <NavLink to={"/product/?q=reactjs"}>Product List by query</NavLink>
              </li>
              <li>
                <NavLink to={"/product/?keyword=reactjs&batch=2&fee=40000"}>Product List by multi query</NavLink>
              </li>

              <li>
                <NavLink to={"/language"}>Language</NavLink>
              </li>
              <li>
                <NavLink to={"/language/en"}>LanguageEn</NavLink>
              </li>
              <li>
                <NavLink to={"/language/th"}>LanguageTh</NavLink>
              </li>
              <li>
                <NavLink to={"/language/sri"}>LanguageSri</NavLink>
              </li>

              <li>
                <NavLink to={"/language/jpn"}>LanguageJP</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
