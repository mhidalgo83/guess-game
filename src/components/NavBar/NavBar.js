import React from "react";
import "./NavBar.css";

const NavBar = props => (
  <nav className="navbar navbar-light bg-light sticky-top">
    <h2>
      Score: {props.score} | Top Score: {props.topScore} 
    </h2>
    <h1>{props.answer}</h1>
  </nav>
);

export default NavBar;
