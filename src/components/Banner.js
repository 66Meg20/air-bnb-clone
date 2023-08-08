import React, { useState } from "react";
import "./banner.css";
import { Button } from "@mui/material";
import SearchDate from "./SearchDate.js";

export default function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner__container">
      <div className="banner__search">
        {showSearch && <SearchDate />}
        <Button
          onClick={() => {
            setShowSearch(!showSearch);
          }}
          variant="outlined"
          className="banner__search__button"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>{" "}
      </div>
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
