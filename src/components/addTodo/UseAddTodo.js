import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../../store/actions/todoActions";
const UseAddTodo = () => {
  const dispatch = useDispatch();
  const [isUpdate, setIsUpdate] = useState(false);
  const [todo, setTodo] = useState({
    title: "",
    isImp: false,
    isComp: false,
    id: v4(),
  });
  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
    todo.title === "" &&
      alert(
        "It seems you have not added any text. To add a TODO please try again and enter some text."
      );
    dispatch(addTodo(todo));
  };
  return {
    todo,
    handleChange,
    isUpdate,
    onSubmitHandler,
  };
};

export default UseAddTodo;
