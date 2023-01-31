import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
const Header = () => {
  return (
    <div className="h-12 bg-indigo-500 w-full flex shrink-0 items-center justify-between">
      <div className="left mx-8">
        <a
          href="/"
          className="text-white font-bold text-lg focus:outline-none focus:outline-4 focus:outline-indigo-300 rounded-sm p-0.5 "
        >
          TODO
        </a>
      </div>
      <div className="center flex">
        <input
          type="text"
          placeholder="Search"
          className="bg-indigo-100 rounded py-1 px-8 pr-16 w-96 focus:outline-none"
        />
        <div className="text-indigo-700 cursor-pointer text-xl relative right-10 top-1.5">
          <AiOutlineSearch />
        </div>
      </div>
      <div className="right text-white text-3xl mx-5 cursor-pointer hover:text-indigo-700  hover:bg-white rounded-full transition delay-50 ease-in-out">
        <a href="/">
          <RiAccountCircleFill className="border-none outline-none"></RiAccountCircleFill>
        </a>
      </div>
    </div>
  );
};

export default Header;
