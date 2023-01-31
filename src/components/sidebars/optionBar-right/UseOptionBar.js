import { useDispatch } from "react-redux";
import {
  disappearRightBar,
  deleteTodo,
} from "../../../store/actions/todoActions";
export default function UseOptionBar() {
  const dispatch = useDispatch();
  const closeRightBar = () => {
    dispatch(disappearRightBar());
  };
  const onDeleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  return { closeRightBar, onDeleteHandler };
}
