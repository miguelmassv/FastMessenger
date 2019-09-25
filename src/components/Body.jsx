import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import Cards from "../components/Cards";
import CardItem from "../components/CardItem";
import useInitialState from "../hooks/useInitialState";
import "../assets/styles/components/Body.scss";

const API = "http://localhost:3000/services";

const Body = () => {
  const initialState = useInitialState(API);
  return (
    <div className="main">
      <Header />
      <Search />
      <Cards>
        {initialState.services.map(item => (
          <CardItem key={item.id} {...item} />
        ))}
      </Cards>
    </div>
  );
};
export default Body;
