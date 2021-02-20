import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { authReducer } from '../../auth/store/reducer/authReducer';
import { pomodoroCounterReducer } from '../../pomodoroCounter/store/reducer/pomodoroCounterReducer';
import { settingsReducer } from '../../settings/store/reducers/settingsReducer';
import { statsReducer } from '../../stats/store/reducer/statsReducer';
import { taskAndNotesReducer } from '../../tasksAndNotes/store/reducer/taskAndNotesReducer';

export const rootReducer = combineReducers({
  stats: statsReducer,
  auth: authReducer,
  tasksAndNotes: taskAndNotesReducer,
  pomodoroCounter: pomodoroCounterReducer,
  settings: settingsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
