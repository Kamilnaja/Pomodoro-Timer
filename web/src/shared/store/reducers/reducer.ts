import { applyMiddleware, combineReducers, createStore } from "redux";
import { main } from "../../../main/store/reducers/reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { stats } from "../../../stats/store/reducer/statsReducer";

export const rootReducer = combineReducers({ main, stats });
export const store = createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
