import react, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Banner.css";
import { Button } from "@mui/material";
import React from "react";
import Search from "./Search";
// import { useHistory } from "react-router-dom";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner__container">
      <div className="banner__search">
        {showSearch && <Search />}
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

export default Banner;
