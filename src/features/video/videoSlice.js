import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    videoList: [],
    isLoading: false
}

export const getVideoListRedux = createAsyncThunk("video/getVideoList", async (payload, thunkAPI) => {
    try {
        const res = await axios({
            method: "GET",
            url: `${process.env.REACT_APP_SERVER_URL}/videos`
        })
        return res.data
    } catch(err) {
        console.log(err)
        return thunkAPI.rejectWithValue("Error getting video list.")
    }
})

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
        // Get Video List
        .addCase(getVideoListRedux.pending, state => {
            state.isLoading = true;
        })
        .addCase(getVideoListRedux.fulfilled, (state , {payload}) => {
            state.isLoading = false;
            // console.log(payload)
            state.videoList = payload
        })
        .addCase(getVideoListRedux.rejected, state => {
            state.isLoading = false;
        })
    }
})

export const {

} = videoSlice.actions;

export default videoSlice.reducer;