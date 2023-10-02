import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  return (
    <div className="header__container">
      <img
        src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102014/airbnb.png?itok=d2X_Ds1a"
        alt="logo"
      />
      <div className="header__center">
        <input type="search" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a host </p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
}
