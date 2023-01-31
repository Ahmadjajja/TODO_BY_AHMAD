import React from "react";

const NavbarLink = (props) => {
  return (
    <a href={props.link} className="focus:outline-none">
      <div className="flex flex-row items-center px-5 py-0.5 border-b-[1px] border-white max-h-10  font-thin active:font-normal focus:bg-slate-500 active:bg-slate-300 hover:bg-slate-100 hover:text-blue-600">
        <div>{props.icon}</div>
        <ul className="px-3 py-1.5">
          <li className="py-0">{props.label}</li>
        </ul>
      </div>
    </a>
  );
};

export default NavbarLink;
