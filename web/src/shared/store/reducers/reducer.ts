import { applyMiddleware, combineReducers, createStore } from "redux";
import { mainReducer } from "../../../main/store/reducers/main.reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { statsReducer } from "../../../stats/store/reducer/statsReducer";
import { authReducer } from "../../../auth/store/reducer/auth.reducer";

export const rootReducer = combineReducers({
  main: mainReducer,
  stats: statsReducer,
  auth: authReducer,
});
export const store = createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);
