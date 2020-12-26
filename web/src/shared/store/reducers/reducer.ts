import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { main } from "../../../main/store/reducers/reducer";
import thunkMiddleware from "redux-thunk";

export const rootReducer = combineReducers({ main });
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
