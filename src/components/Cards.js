import React from "react";
import "./cards.css";

export default function Cards({ src, title, description, price }) {
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
