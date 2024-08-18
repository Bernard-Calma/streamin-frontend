import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: {_id: "632bb2e2699c899a76193e86",
        username: "Guest",
        name: "Guest"},
    loggedIn: false,
    isLoading: false
}

export const login = createAsyncThunk("user/login", async (payload, thunkAPI) => {
    try {
        const res = await axios({
            method: "POST",
            url: `${process.env.REACT_APP_SERVER_URL}/users/login`,
            withCredentials: true,
            data: payload
        })
        return res.data
    } catch(err) {
        console.log(err)
        return thunkAPI.rejectWithValue("Error logging in.")
    }
})

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Logout
        logout: (state) => {
            console.log("Logout")
            state.user = {_id: "632bb2e2699c899a76193e86",
                username: "Guest",
                name: "Guest"};
            state.loggedIn = false;
        }
    },
    extraReducers: builder => {
        builder
        // User Login
        .addCase(login.pending, state => {
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state , {payload}) => {
            state.isLoading = false;
            console.log(payload);
            state.user = payload;
            state.loggedIn = true;
        })
        .addCase(login.rejected, state => {
            state.isLoading = false;
        })
    }
})

export const {
    logout
} = userSlice.actions;

export default userSlice.reducer;