import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  READ_TODO,
  CLOSE_RIGHT_BAR,
} from "./../constants/types";

export const addTodo = (data) => {
  return {
    type: ADD_TODO,
    payload: data,
  };
};
export const readTodo = (data) => {
  console.log("Data in Action", data);
  return {
    type: READ_TODO,
    payload: data,
  };
};
export const disappearRightBar = () => {
  return {
    type: CLOSE_RIGHT_BAR,
  };
};
export const deleteTodo = (data) => {
  return {
    type: DELETE_TODO,
    payload: data,
  };
};
