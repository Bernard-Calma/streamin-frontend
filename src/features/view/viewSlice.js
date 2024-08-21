import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    view: "Landing Page",
    navSelected: "Landing Page",
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
        },
        setView: (state, {payload}) => {
            state.view = payload;
            state.navSelected = payload;
            if(state.navSelected === "Landing Page") state.showLogin = false;
        }
    }
})

export const {
    toggleShowLogin,
    showLogin,
    setView
} = viewSlice.actions;

export default viewSlice.reducer;