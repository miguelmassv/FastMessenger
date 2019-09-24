import React from "react";
import "../assets/styles/components/Header.scss";

const Header = () => (
  <div className="header">
    <ul className="nav nav-pills nav-fill">
      <li className="nav-item">
        <a className="nav-link active section-nav" href="#">
          <i className="icon-nav fas fa-home"></i>
          <span>Home</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link section-nav" href="#">
          <i className="icon-nav fas fa-envelope"></i>
          <span>Messages</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link section-nav" href="#">
          <i className="icon-nav fas fa-star"></i>
          <span>Whishlist</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link section-nav" href="#">
          <i className="icon-nav fas fa-cog"></i>
          <span>Settings</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link section-nav" href="#">
          <i className="icon-nav fas fa-user"></i>
          <span>My Account</span>
        </a>
      </li>
    </ul>
  </div>
);

export default Header;
