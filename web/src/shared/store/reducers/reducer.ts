import { applyMiddleware, combineReducers, createStore } from "redux";
import { main } from "../../../main/store/reducers/reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export const rootReducer = combineReducers({ main });
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
