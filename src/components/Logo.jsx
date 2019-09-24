import React from "react";
import "../assets/styles/components/Logo.scss";

import logo from "../assets/static/logo.svg";

const Logo = () => (
  <a className="navbar-logo" href="#">
    <img className="logo" src={logo} alt="" />
  </a>
);

export default Logo;
