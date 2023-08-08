import React, { useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button } from "@mui/material";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./searchDate.css";
export default function SearchDate() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const selectRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <div className="search__container">
      <DateRangePicker ranges={[selectRange]} onChange={handleSelect} />
      <h2>
        Number of guests
        <AccountCircleOutlinedIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button> Search Airbnb</Button>
    </div>
  );
}
