import { createStore } from "redux";
import { mainState } from "./reducer";
const store = createStore(mainState, ["Use Redux"]);
// todo - fix me
function addTodo(text: string) {
  return {
    type: "ADD_TODO",
    text,
  };
}
