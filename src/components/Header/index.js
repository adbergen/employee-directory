import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="header">
      {props.children}
      <h1>Employee Directory</h1>
    </div>
  );
}

export default Header;
