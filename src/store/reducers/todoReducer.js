import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  READ_TODO,
  CLOSE_RIGHT_BAR,
} from "./../constants/types";
let initialState = {
  todos: [],
  rightBarFlag: false,
  todo: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      let newTodos = [...state.todos, action.payload];
      return {
        ...state,
        todos: newTodos,
      };
    }
    case READ_TODO: {
      let todo = action.payload;
      let currentRightBarState = (state.rightBarFlag = true);
      console.log("data in reducer", todo);
      return {
        ...state,
        todo,
        rightBarFlag: currentRightBarState,
      };
    }
    case CLOSE_RIGHT_BAR: {
      let currentRightBarState = false;
      return {
        ...state,
        rightBarFlag: currentRightBarState,
      };
    }
    case DELETE_TODO: {
      let newTodos = state.todos.filter((item) => item.id !== action.payload);
      return {
        ...state,
        todos: newTodos,
      };
    }
    default:
      return state;
  }
};

export default todoReducer;
