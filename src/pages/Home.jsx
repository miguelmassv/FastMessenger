import React from "react";
import Body from "../components/Body";
import SideBar from "../components/SideBar";

import "../assets/styles/pages/Home.scss";

const Home = () => (
  <div className="custom-container">
    <SideBar />
    <Body />
  </div>
);

export default Home;
