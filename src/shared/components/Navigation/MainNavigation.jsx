import React, { useState } from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElement/Backdrop";
import { Link } from "react-router-dom";

import "./MainNavigation.css";

const MainNavigation = (props) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  return (
    <>
      {sideBarToggle && (
        <Backdrop onClick={() => setSideBarToggle(!sideBarToggle)} />
      )}

      <SideDrawer
        show={sideBarToggle}
        onClick={() => setSideBarToggle(!sideBarToggle)}
      >
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={() => setSideBarToggle(!sideBarToggle)}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
