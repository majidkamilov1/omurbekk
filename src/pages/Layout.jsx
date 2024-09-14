import React, { useState } from "react";
import TopHeader from "../components/TopHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";

const Layout = () => {
  const [menuActive, setmenuActive] = useState(false);
  console.log(menuActive);
  return (
    <div>
      <TopHeader />
      <Header setmenuActive={setmenuActive} />
      <Outlet />
      <Footer />
      <Menu menuActive={menuActive} setmenuActive={setmenuActive} />
    </div>
  );
};

export default Layout;
