import { combineReducers } from 'redux';
import userSlice from './user';
import mapsSlice from './map';
import settingsSlice from './settings';
import ssnSlice from './ssn';
import logSlice from './log';

const rootReducer = combineReducers({
  userSlice,
  mapsSlice,
  settingsSlice,
  ssnSlice,
  logSlice,
});

export default rootReducer;