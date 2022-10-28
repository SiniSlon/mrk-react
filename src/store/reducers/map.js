import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  map: 'osm',
};

const map = createSlice({
  name: 'map',
  initialState,
  reducers: {
    changeMap(state, action) {
      state.map = action.payload;
      console.log(state.map);
    }
  },

});

export const { changeMap } = map.actions;
export default map.reducer;