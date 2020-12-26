export async function fetchStats(dispatch: any, getState: any) {
  fetch("/fakeApi/todos")
    .then((response) => response.json())
    .then((data) => dispatch({ type: "todos/todosLoaded", payload: data }));
}
