import React from "react";

const Card = ({ icon }) => (
  <span className="switch">
    <i className={"fas " + icon + " fa-side"}></i>
    <input type="checkbox" className="switch" id={icon} />
    <label htmlFor={icon}></label>
  </span>
);

export default Card;
