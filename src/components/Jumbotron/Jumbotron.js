import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Welcome to Pawnee!!</h1>
      <p className="lead">
        Click on each image to gain a point, but be careful to not click on the
        same image more than once.
      </p>
    </div>
  </div>
);

export default Jumbotron;
