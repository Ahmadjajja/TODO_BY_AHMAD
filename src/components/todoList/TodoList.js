import React from "react";
import { AiOutlineStar, AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import UseTodoList from "./UseTodoList";
const TodoList = (props) => {
  const { item } = props;
  const { handleRead, onDeleteHandler } = UseTodoList();
  return (
    <div className="mx-6 mt-3 bg-slate-200 cursor-pointer rounded-md h-14 flex flex-row items-center justify-between hover:bg-slate-300">
      <div className="flex  flex-row items-center w-full justify-between">
        <div className="mx-3">
          <input
            type="checkbox"
            className="h-3.5 w-3.5 cursor-pointer"
            title="Completed"
            name="taskCompleted"
            id="completed"
          />
          <div className="mx-5 inline">
            <span
              onClick={() => {
                handleRead(item);
              }}
              className="hover:underline underline-offset-2"
            >
              {item.title}
            </span>
          </div>
        </div>
        <div className="mx-3 flex flex-row space-x-3 items-center ">
          <AiFillEdit
            size="20"
            color="#331e36"
            title="Edit"
            className="hover:fill-blue-700"
          />
          <AiOutlineDelete
            size="20"
            color="#331e36"
            className="hover:fill-red-600"
            title="Delete"
            onClick={() => onDeleteHandler(item.id)}
          />
          <AiOutlineStar
            size="20"
            color="#331e36"
            className="hover:fill-blue-700"
            title="Mark as Important"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
