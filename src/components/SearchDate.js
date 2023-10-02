import React, { useState } from "react";
import "./searchDate.css";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button } from "@mui/material";

export default function Search() {
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
        <AccountCircleIcon />
      </h2>
      <input min={0} defaultValue={2} type="number" />
      <Button> Search Airbnb</Button>
    </div>
  );
}
