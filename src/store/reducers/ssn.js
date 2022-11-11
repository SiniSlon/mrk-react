import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ssn: null,
};

const ssn = createSlice({
  name: 'ssn',
  initialState,
  reducers: {
    changeSnn(state, action) {
      state.ssn = action.payload;
      console.log(state.ssn);
    }
  },

});

export const { changeSnn } = ssn.actions;
export default ssn.reducer;