import { combineReducers } from 'redux';
import userSlice from './user';
import mapsSlice from './map';
import settingsSlice from './settings';

const rootReducer = combineReducers({
  userSlice,
  mapsSlice,
  settingsSlice
});

export default rootReducer;