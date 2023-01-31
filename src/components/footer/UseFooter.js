import React from "react";
import { useState } from "react";
const UseFooter = () => {
  let now = new Date();
  let thisYear = now.getFullYear();
  const [year, setYear] = useState(thisYear);
  return {
    year,
  };
};

export default UseFooter;
