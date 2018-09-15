import React from "react";
import "./ImageCard.css";

const ImageCard = props => (
  <img
    className="img-thumbnail hvr-grow"
    value={props.id}
    onClick={() => props.handleClick(props.id)}
    alt={props.name}
    src={props.image}
  />
);

export default ImageCard;
