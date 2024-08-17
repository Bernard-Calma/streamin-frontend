import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    videoList: [],
    videoToShow: {},
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

export const modifyVideo = createAsyncThunk("vide/modifyVideo", async (payload, thunkAPI) => {
    // console.log(payload)
    try {
        const res =  await axios({
            method: "PUT",
            url:`${process.env.REACT_APP_SERVER_URL}/videos/${payload._id}`,
            data: payload,
            withCredentials: true
        })
        return res.data
    } catch(err) {
        console.log(err)
        return thunkAPI.rejectWithValue("Error editing video.")       
    }
})

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        // Set video to show on show page
        setVideoToShow: (state, {payload}) => {
            // console.log(payload)
            state.videoToShow = payload
        }
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
        // Modify video
        .addCase(modifyVideo.pending, state => {
            state.isLoading = true;
        })
        .addCase(modifyVideo.fulfilled, (state , {payload}) => {
            state.isLoading = false;
            state.videoList = state.videoList.map(video => video._id === payload._id ? payload : video)
        })
        .addCase(modifyVideo.rejected, state => {
            state.isLoading = false;
        })
    }
})

export const {
    setVideoToShow
} = videoSlice.actions;

export default videoSlice.reducer;