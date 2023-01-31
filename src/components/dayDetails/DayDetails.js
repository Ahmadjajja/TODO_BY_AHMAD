import React from "react";
import { FiMenu } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

import UseDayDetails from "./UseDayDetails";

const DayDetails = (props) => {
  const { day, date, month } = UseDayDetails();
  return (
    <div className="flex flex-row m-2 mx-4">
      <div className="left">
        <GiHamburgerMenu
          onClick={props.navbarToggler}
          className="inline text-2xl relative cursor-pointer bottom-1 hover:fill-blue-600 active:fill-blue-400"
        ></GiHamburgerMenu>
        <h3 className="inline mx-2 text-2xl text-[#331e36]">MY DAY</h3>
        <div className="text-slate-400 mx-8">
          <span className="pr-1"> {day}, </span>
          <span> {date} </span>
          <span> {month} </span>
        </div>
      </div>
      {/* //Add div with class name right to add the other functionalities on the right side of this component */}
    </div>
  );
};

export default DayDetails;
