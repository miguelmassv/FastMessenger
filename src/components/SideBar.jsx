import React from "react";
import Logo from "./Logo";
import SideMenu from "./SideMenu";

import "../assets/styles/components/SideBar.scss";

const SideBar = () => (
  <div className="sidebar">
    <Logo />
    <SideMenu />
  </div>
);

export default SideBar;
