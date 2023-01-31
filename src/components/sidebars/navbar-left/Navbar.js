import React from "react";
import NavbarLink from "./navbarLink/NavbarLink";
import { BsSun, BsStar, BsCalendar3 } from "react-icons/bs";
import { VscAccount, VscHome } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = (props) => {
  return (
    <div className="w-[30vw] fixed left-0 top-0 bg-slate-200 h-screen mt-12">
      <div className="">
        <AiOutlineClose
          onClick={props.toggler}
          className="inline ml-5 my-4 text-2xl relative cursor-pointer hover:fill-blue-600 active:fill-blue-400"
        ></AiOutlineClose>
      </div>
      <NavbarLink label="My Day" icon={<BsSun />} link="/" />
      <NavbarLink label="Important" icon={<BsStar />} link="/important" />
      <NavbarLink label="Planned" icon={<BsCalendar3 />} link="/planned" />
      <NavbarLink
        label="Assigned to me"
        icon={<VscAccount />}
        link="/assignedToMe"
      />
      <NavbarLink label="Tasks" icon={<VscHome />} link="/Tasks" />
    </div>
  );
};

export default Navbar;
