import React from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Cards from "../components/Cards";
import CardItem from "../components/CardItem";
import "../assets/styles/components/Body.scss";

const Body = () => (
  <div className="main">
    <Header />
    <Search />
    <Cards>
      <CardItem id="1" />
      <CardItem id="2" />
      <CardItem id="3" />
    </Cards>
  </div>
);

export default Body;
