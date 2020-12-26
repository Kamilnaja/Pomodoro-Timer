export async function fetchStats(dispatch: any, getState: any) {
  const response = await client.get("/fakeApi/todos");
  dispatch({ type: "todos/todosLoaded", payload: response.todos });
}
