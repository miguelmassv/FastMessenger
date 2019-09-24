import React from "react";
import "../assets/styles/components/CardItem.scss";

const CardItem = ({ id }) => (
  <div className="card-custom">
    <div className="round">
      <input type="checkbox" id={id} />
      <label htmlFor={id}></label>
    </div>
    <div className="card-row">
      <div className="date">
        <p className="p-date">Monday</p>
        <p className="p-date">10th May</p>
        <p className="p-date">2:28 PM</p>
      </div>
      <div className="destination">
        <i className="fas fa-location-arrow"></i>
        <div className="d-location">
          <p className="p-destination">Houston, TX, 33619</p>
          <i className="fas fa-chevron-down"></i>
          <p className="p-destination">Atlanta, GA, 30123</p>
        </div>
      </div>
      <div className="price">
        <i className="fas fa-truck"></i>
        <h2 className="text-price">$250.00</h2>
        <i className="far fa-heart"></i>
        <i className="fas fa-ellipsis-v"></i>
      </div>
    </div>
  </div>
);

export default CardItem;
