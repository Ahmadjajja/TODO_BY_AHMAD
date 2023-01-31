import React from "react";
import Button from "../../components/button/Button";
import DayDetails from "../../components/dayDetails/DayDetails";
import Header from "../../components/header/Header";
import TodoList from "../../components/todoList/TodoList";
import AddTodo from "../../components/addTodo/AddTodo";
import Footer from "../../components/footer/Footer";
import OptionBar from "../../components/sidebars/optionBar-right/OptionBar";
import Navbar from "../../components/sidebars/navbar-left/Navbar";
import UseHome from "./UseHome";
import { useSelector } from "react-redux";

const Home = () => {
  const todos = useSelector((store) => store.todoReducer.todos);
  const rightBarFlag = useSelector((store) => store.todoReducer.rightBarFlag);

  const {
    isNavbarAppear,
    navbarToggler,
    isOptionBarAppear,
    optionBarToggler,
    isTodoButton,
    todoModalLauncher,
  } = UseHome();

  return (
    <div className="flex w-full flex-col h-screen content-center">
      <Header />
      <DayDetails
        navbarToggler={navbarToggler}
        optionBarToggler={optionBarToggler}
      />
      <div className="border-b-[1px] w-1/2 my-4 border-indigo-600 mx-auto "></div>
      {isTodoButton ? (
        <div className="mx-auto">
          <Button label="Add a TASK" event={todoModalLauncher} />
        </div>
      ) : (
        <AddTodo todoModal={todoModalLauncher} />
      )}

      {isNavbarAppear && <Navbar toggler={navbarToggler} />}
      {todos.map((item, index) => (
        <TodoList key={index} item={item} />
      ))}
      {rightBarFlag && <OptionBar />}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
