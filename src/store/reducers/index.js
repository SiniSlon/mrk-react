import { combineReducers } from 'redux';
import userSlice from './user';
import mapsSlice from './map';
import settingsSlice from './settings';
import ssnSlice from './ssn';

const rootReducer = combineReducers({
  userSlice,
  mapsSlice,
  settingsSlice,
  ssnSlice
});

export default rootReducer;