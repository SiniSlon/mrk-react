import { combineReducers } from 'redux';
import userSlice from './user';

const rootReducer = combineReducers({
  userSlice,
});

export default rootReducer;