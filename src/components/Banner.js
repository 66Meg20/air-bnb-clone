import React from "react";
import "./banner.css";
import { Button } from "@mui/material";

export default function Banner() {
  return (
    <div className="banner__container">
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <p>
          Plan a different kind of getaway to uncover the hidden gems near you
        </p>
        <Button variant="outlined">Explore near me</Button>
      </div>
    </div>
  );
}
