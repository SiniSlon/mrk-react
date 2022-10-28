import { combineReducers } from 'redux';
import userSlice from './user';
import settingsSlice from './settings';

const rootReducer = combineReducers({
  userSlice,
  settingsSlice,
});

export default rootReducer;