import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { authReducer } from '../../../auth/store/reducer/authReducer';
import { mainReducer } from '../../../main/store/reducers/mainReducer';
import { statsReducer } from '../../../stats/store/reducer/statsReducer';
import { taskAndNotesReducer } from '../../../tasksAndNotes/store/reducer/taskAndNotesReducer';

export const rootReducer = combineReducers({
  main: mainReducer,
  stats: statsReducer,
  auth: authReducer,
  tasksAndNotes: taskAndNotesReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
