import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <h1>Employee Directory</h1>
      <h5>Click on a category to sort by ascending or descending</h5>
      <h5>Or search for a name to filter user by name</h5>
    </div>
  );
}

export default Header;
