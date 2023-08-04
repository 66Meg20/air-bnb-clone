import React from "react";
import Banner from "./Banner.js";
import Cards from "./Cards.js";
import "./home.css";

export default function Home() {
  return (
    <div className="home__container">
      <Banner />
      <div className="homeSection">
        <div className="cardsContainer">
          <Cards
            src="https://images.unsplash.com/photo-1503125210483-8b1d12bccdbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFuYW1hbmlkYWhvJTIwbWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            title="Hanimandaho, maldives"
            description="Indonesea Ministry of Tourism, wego. and Creative Comunity collaborates to revive tourism to bali. with an aime to welcome over 900,000 tourists"
            price="$222"
          />
          <Cards
            src="https://images.unsplash.com/photo-1503125210483-8b1d12bccdbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFuYW1hbmlkYWhvJTIwbWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            title="Hanimandaho, maldives"
            description="Indonesea Ministry of Tourism, wego. and Creative Comunity collaborates to revive tourism to bali. with an aime to welcome over 900,000 tourists"
            price="$222"
          />
        </div>
        <div className="cardsContainer">
          <Cards
            src="https://images.unsplash.com/photo-1503125210483-8b1d12bccdbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFuYW1hbmlkYWhvJTIwbWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            title="Hanimandaho, maldives"
            description="Indonesea Ministry of Tourism, wego. and Creative Comunity collaborates to revive tourism to bali. with an aime to welcome over 900,000 tourists"
            price="$222"
          />
          <Cards
            src="https://images.unsplash.com/photo-1503125210483-8b1d12bccdbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFuYW1hbmlkYWhvJTIwbWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            title="Hanimandaho, maldives"
            description="Indonesea Ministry of Tourism, wego. and Creative Comunity collaborates to revive tourism to bali. with an aime to welcome over 900,000 tourists"
            price="$222"
          />
        </div>
        <div className="cardsContainer">
          <Cards
            src="https://images.unsplash.com/photo-1503125210483-8b1d12bccdbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFuYW1hbmlkYWhvJTIwbWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            title="Hanimandaho, maldives"
            description="Indonesea Ministry of Tourism, wego. and Creative Comunity collaborates to revive tourism to bali. with an aime to welcome over 900,000 tourists"
            price="$222"
          />
          <Cards
            src="https://images.unsplash.com/photo-1503125210483-8b1d12bccdbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGFuYW1hbmlkYWhvJTIwbWFsZGl2ZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            title="Hanimandaho, maldives"
            description="Indonesea Ministry of Tourism, wego. and Creative Comunity collaborates to revive tourism to bali. with an aime to welcome over 900,000 tourists"
            price="$222"
          />
        </div>
      </div>
    </div>
  );
}
