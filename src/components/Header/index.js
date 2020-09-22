import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <h1>Employee Directory</h1>
      <h5>
        Click on a category to sort columns by ascending or descending order.
      </h5>
      <h5>Or search by name to filter users by name.</h5>
    </div>
  );
}

export default Header;
