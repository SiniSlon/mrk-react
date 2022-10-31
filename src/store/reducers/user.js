import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    putUser(state, action) {
      state.user = action.payload;
    },
    logoutUser(state) {
      state.user = null;
    },
  },

});

export const { putUser, logoutUser } = user.actions;
export default user.reducer;