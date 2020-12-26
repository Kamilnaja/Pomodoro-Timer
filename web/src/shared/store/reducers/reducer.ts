import { combineReducers, createStore } from "redux";
import { main } from "../../../main/store/reducers/reducer";

export const rootReducer = combineReducers({ main });
export const store = createStore(rootReducer);
