import React from "react";
import "../assets/styles/components/SideStatus.scss";

const SideStatus = () => (
  <div className="side">
    <p className="p-side">Status</p>
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped bg-info"
        role="progressbar"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  </div>
);

export default SideStatus;
