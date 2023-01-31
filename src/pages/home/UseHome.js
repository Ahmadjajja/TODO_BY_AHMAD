import { useState } from "react";

const UseHome = () => {
  const [isNavbarAppear, setIsNavbarAppear] = useState(false);
  const [isTodoButton, setIsTodoButton] = useState(true);
  const navbarToggler = () => {
    setIsNavbarAppear(!isNavbarAppear);
  };

  const todoModalLauncher = () => {
    setIsTodoButton(!isTodoButton);
  };
  return {
    isNavbarAppear,
    navbarToggler,
    isTodoButton,
    todoModalLauncher,
  };
};

export default UseHome;
