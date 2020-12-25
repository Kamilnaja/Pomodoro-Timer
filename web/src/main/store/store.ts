import { createStore } from "redux";
const store = createStore(todos, ["Use Redux"]);

function addTodo(text) {
  return {
    type: "ADD_TODO",
    text,
  };
}
