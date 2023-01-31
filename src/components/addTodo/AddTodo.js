import React from "react";
import Button from "../button/Button";
import { BsCalendarMonth, BsBell, BsArrowRepeat } from "react-icons/bs";
import UseAddTodo from "./UseAddTodo";

const AddTodo = (props) => {
  //Props Destructuring
  const { todoModal } = props;
  const { todo, handleChange, isUpdate, onSubmitHandler } = UseAddTodo();
  return (
    <div className="flex align-center justify-center bg-slate-200 flex-col px-4 py-3  mx-6 rounded-md">
      <input
        type="text"
        placeholder="Add a task"
        name="title"
        value={todo.title}
        onChange={(e) => handleChange(e)}
        className="p-2 border-b-2 border-b-indigo-800 w-[75] focus:outline-none"
      />
      <div className="flex justify-between flex-row items-center">
        <div className="text-2xl cursor-pointer mt-2">
          <BsCalendarMonth
            className="inline p-0.5 rounded-sm hover:fill-blue-600"
            title="Add a due date"
          ></BsCalendarMonth>
          <BsBell
            className="inline ml-4 p-0.5 rounded-sm hover:fill-blue-600"
            title="Remind me"
          ></BsBell>
          <BsArrowRepeat
            className="inline ml-4 p-0.5 rounded-sm hover:fill-blue-600"
            title="Repeat"
          ></BsArrowRepeat>
        </div>
        {isUpdate ? (
          <div className="self-end mt-2">
            <Button
              label="Update"
              event={(e) => {
                todoModal();
              }}
            />
          </div>
        ) : (
          <div className="self-end mt-2">
            <Button
              label="Add"
              event={(e) => {
                onSubmitHandler(e);
                todoModal();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddTodo;
