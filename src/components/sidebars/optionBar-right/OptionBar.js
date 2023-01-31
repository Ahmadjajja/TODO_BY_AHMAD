import React from "react";
import {
  BsStarFill,
  BsBell,
  BsCalendarMonth,
  BsStar,
  BsSun,
  BsArrowRepeat,
  BsPaperclip,
} from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";
import {
  AiOutlineCloseCircle,
  AiOutlineDelete,
  AiOutlineTag,
  AiOutlineClose,
} from "react-icons/ai";
import UseOptionBar from "./UseOptionBar";
import { useSelector } from "react-redux/es/exports";
const OptionBar = () => {
  const { closeRightBar, onDeleteHandler } = UseOptionBar();
  const todo = useSelector((store) => store.todoReducer.todo);
  return (
    <div className=" w-1/3 h-screen fixed right-0 top-0 bg-slate-200 mt-12">
      <div>
        <div className="flex flex-row py-4 items-center justify-between bg-white m-3">
          <input
            type="checkbox"
            className="mx-2 scale-125 cursor-pointer"
            name="completed"
            id="todoCompleted"
          />
          <span className="text-lg tracking-wide cursor-none font-medium">
            {todo.title}
          </span>
          <BsStarFill
            color="#2563eb"
            className="mx-2 cursor-pointer stroke-1 inline"
          ></BsStarFill>
          {/* <BsStar className="mx-2 cursor-pointer inline"></BsStar> */}
        </div>
        {/* <div className="flex flex-row justify-between items-center bg-white mx-3 hover:bg-slate-50 cursor-pointer py-4 mb-3">
          <div>
            <BsSun className="inline mx-2" color="#2563eb" />
            <span className="text-blue-600 mx-3">Added to My Day</span>
          </div>
          <AiOutlineCloseCircle
            className="inline mx-2"
            title="Remove from My Day"
            size="20px"
            color="#2563eb"
          />
        </div> */}
        <div className="bg-white mx-3 cursor-pointer py-4 mb-3">
          <BsSun className="inline mx-2" color="#2563eb" />
          <span className="text-blue-600 mx-3">Add to My Day</span>
        </div>
        <div className="bg-white mx-3 mb-3">
          <div className="py-4  hover:bg-slate-50 border cursor-pointer ">
            <BsBell className="inline mx-2" />
            <span className="mx-4 font-light">Remind Me</span>
          </div>
          <div className="py-4  hover:bg-slate-50 border cursor-pointer ">
            <BsCalendarMonth className="inline mx-2" />
            <span className="mx-4 font-light">Add a Due Date</span>
          </div>
          <div className="py-4  hover:bg-slate-50 border cursor-pointer ">
            <BsArrowRepeat className="inline mx-2" />
            <span className="mx-4 font-light">Repeat</span>
          </div>
        </div>
        <div className="bg-white mx-3 py-4 hover:bg-slate-50 cursor-pointer mb-3">
          <AiOutlineTag size="20px" className="inline mx-2 " />
          <span className="mx-3">Pick a Category</span>
        </div>
        <div className="bg-white mx-3 py-4 hover:bg-slate-50 cursor-pointer mb-3">
          <BsPaperclip size="20px" className="inline mx-2 " />
          <span className="mx-3">Add a File</span>
        </div>
        <div className="bg-white m-3 flex flex-row items-center">
          <input
            type="text"
            placeholder="Add a Note"
            className="py-1 px-2 pr-7 w-96 focus:outline-none"
          />
          <div className="cursor-pointer text-xl relative right-4 ">
            <AiOutlineClose />
          </div>
        </div>
      </div>
      <div className="optionBarFooter flex flex-row items-center justify-between fixed bottom-2 px-5 w-1/3">
        <IoExitOutline
          color="#000"
          className="cursor-pointer hover:stroke-blue-700"
          size="24px"
          onClick={closeRightBar}
        />
        <AiOutlineDelete
          size="24px"
          className="cursor-pointer hover:fill-red-600"
          onClick={() => {
            onDeleteHandler(todo.id);
            closeRightBar();
          }}
        />
      </div>
    </div>
  );
};

export default OptionBar;
