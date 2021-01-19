import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { authReducer } from "../../../auth/store/reducer/auth.reducer";
import { mainReducer } from "../../../main/store/reducers/main.reducer";
import { statsReducer } from "../../../stats/store/reducer/statsReducer";

export const rootReducer = combineReducers({
  main: mainReducer,
  stats: statsReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
