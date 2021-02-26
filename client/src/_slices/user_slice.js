import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const postsSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        loginUser(state, action) {
            state.loginSuccess = action.payload;
        },
        registerUser(state, action) {
            state.register = action.payload;
        },
        auth(state, action) {
            state.userData = action.payload;
        },
    },
});

const { actions, reducer } = postsSlice;
export const { loginUser, registerUser, auth } = actions;
export default reducer;
