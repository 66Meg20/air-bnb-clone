import React from "react";
import "./Header.css";
import AirbnbLogo from "../assets/AirbnbLogo.png";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

export default function Header() {
  return (
    <div className="header__container">
      <img src={AirbnbLogo} alt="logo" />
      <div className="header__center">
        <input type="search" />
        <SearchOutlinedIcon />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <LanguageOutlinedIcon />
        <ArrowDropDownOutlinedIcon />
        <AccountCircleOutlinedIcon />
      </div>
    </div>
  );
}
