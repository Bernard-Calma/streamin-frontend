import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    view: "Landing Page",
    showLogin: false,
    isLoading: false
}

export const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
        // Logout
        toggleShowLogin: (state) => {
            state.showLogin = !state.showLogin;
        },
        showLogin: (state) => {
            state.showLogin = true;
        }
    }
})

export const {
    toggleShowLogin,
    showLogin
} = viewSlice.actions;

export default viewSlice.reducer;