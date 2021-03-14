import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { authReducer } from '../../auth/store/reducer/authReducer';
import { errorReducer } from '../../error/state/reducer/errorReducer';
import { pomodoroCounterReducer } from '../../pomodoroCounter/store/reducer/pomodoroCounterReducer';
import { settingsReducer } from '../../settings/store/reducers/settingsReducer';
import { statsReducer } from '../../stats/store/reducer/statsReducer';
import { tagsReducer } from '../../tag/store/reducers/tagsReducer';

export const rootReducer = combineReducers({
  stats: statsReducer,
  auth: authReducer,
  pomodoroCounter: pomodoroCounterReducer,
  settings: settingsReducer,
  tags: tagsReducer,
  error: errorReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
