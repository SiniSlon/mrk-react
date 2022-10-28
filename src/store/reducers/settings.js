import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  settings: {
    common: {
      sortByTime: false,
      sessions: false,
    },
    filters: {
      systemSvyazi: {
        itidium: true,
        thuraya: true,
      },
      systemByDefault: {
        itidium: true,
        
      }
    },
    
  },
};

const settings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    putSettings(state, action) {
      state.settings = action.payload;
    }, 
    defaultSettings(state, action) {
      state.settings = initialState;
    }
  },

});

export const { putSettings } = settings.actions;
export default settings.reducer;