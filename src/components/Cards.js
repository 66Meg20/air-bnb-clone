import React from "react";
import "./Card.css";

function Card({ src, title, description, price }) {
  return (
    <div className="cardContainer">
      <img src={src} alt="" />

      <div className="card__info">
        <h1>{title}</h1>
        <p>{description}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

export default Card;
