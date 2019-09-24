import React from "react";
import "../assets/styles/components/Search.scss";

const Search = () => (
  <div className="form-group has-search search-position">
    <span className="fa fa-search form-control-feedback"></span>
    <input type="text" className="form-control" placeholder="Search" />
  </div>
);

export default Search;
