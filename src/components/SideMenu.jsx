import React from "react";
import SideStatus from "./SideStatus";

import "../assets/styles/components/SideMenu.scss";
import Card from "./Card";

const SideMenu = () => (
  <div className="menu-side">
    <p className="p-side">
      <i className="far fa-lightbulb"></i> Smart Filters
    </p>
    <div className="filter-switch">
      <Card icon="fa-certificate" />
      <Card icon="fa-calendar" />
      <Card icon="fa-heart" />
    </div>
    <SideStatus />
  </div>
);

export default SideMenu;
