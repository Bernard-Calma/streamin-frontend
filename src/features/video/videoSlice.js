import { createSlice } from "@reduxjs/toolkit";

export const videoSlice = createSlice({
    name: 'video',
    initialState: {
        videoList: []
    },
    reducers: {

    }
})

export const {

} = videoSlice.actions;

export default videoSlice.reducer;