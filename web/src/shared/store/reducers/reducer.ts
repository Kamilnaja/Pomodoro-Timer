import { applyMiddleware, combineReducers, createStore } from "redux";
import { mainReducer } from "../../../main/store/reducers/main.reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { stats } from "../../../stats/store/reducer/statsReducer";

export const rootReducer = combineReducers({ main: mainReducer, stats });
export const store = createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
