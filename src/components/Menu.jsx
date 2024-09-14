import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ menuActive, setmenuActive }) => {
  return (
    <aside className={`menu ${menuActive && "active"}  `}>
      <div className="logo">
        <img src="/svg/logo.svg" alt="" />
      </div>
      <div onClick={() => setmenuActive(false)} className="menu__menu">
        <span className="material-symbols-outlined">close</span>
      </div>
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
          <NavLink to="/Electronic-resources">Электрондук ресурстар</NavLink>
        </li>
        <li>
          <NavLink to="/Blog">Blog</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Menu;
