import React from "react";
import "../assets/styles/components/CardItem.scss";

const CardItem = ({
  month,
  day,
  dayName,
  time,
  initialLocation,
  destination,
  fare,
  id
}) => (
  <div className="card-custom">
    <div className="round">
      <input type="checkbox" id={id} />
      <label htmlFor={id}></label>
    </div>
    <div className="card-row">
      <div className="date">
        <p className="p-date">{dayName}</p>
        <p className="p-date">{`${day} ${month}`}</p>
        <p className="p-date">{time}</p>
      </div>
      <div className="destination">
        <i className="fas fa-location-arrow"></i>
        <div className="d-location">
          <p className="p-destination">{initialLocation}</p>
          <i className="fas fa-chevron-down"></i>
          <p className="p-destination">{destination}</p>
        </div>
      </div>
      <div className="price">
        <i className="fas fa-truck"></i>
        <h2 className="text-price">${fare}</h2>
        <i className="far fa-heart"></i>
        <i className="fas fa-ellipsis-v"></i>
      </div>
    </div>
  </div>
);

export default CardItem;
