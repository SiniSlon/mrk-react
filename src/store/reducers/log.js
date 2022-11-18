import { createSlice } from "@reduxjs/toolkit";

    const initialState = {
        logs: []
    }

const log = createSlice({
    name:'log',
    initialState,
    reducers:{
        putLog(state, action) {
            state.logs = [...state.logs, action.payload]
        }
    },
})
export const {putLog, putDate} = log.actions;
export default log.reducer;