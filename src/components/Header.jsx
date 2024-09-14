import React from "react";
import { Link, NavLink } from "react-router-dom";
const Header = ({ setmenuActive }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__item">
          <Link to="/" className="header__item--logo">
            <img src="/svg/logo.svg" alt="" />
          </Link>
          <nav className="header__item--nav">
            <ul>
              <li>
                <NavLink to="/">Башкы бет</NavLink>
              </li>
              <li>
                <NavLink to="discipline">Окуу дициплинасы</NavLink>
              </li>
              <li>
                <NavLink to="Scientific-works">Илимий эмгектер</NavLink>
              </li>
              <li>
                <NavLink to="/Electronic-resources">
                  Электрондук ресурстар
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog">Блог</NavLink>
              </li>
            </ul>
          </nav>
          <div
            onClick={() => setmenuActive(true)}
            className="header__item--menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
