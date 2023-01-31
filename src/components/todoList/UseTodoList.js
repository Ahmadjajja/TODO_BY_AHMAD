import { useDispatch } from "react-redux";
import { readTodo, deleteTodo } from "../../store/actions/todoActions";

export default function UseTodoList() {
  const dispatch = useDispatch();
  const handleRead = (item) => {
    dispatch(readTodo(item));
  };
  const onDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  return {
    handleRead,
    onDeleteHandler,
  };
}
