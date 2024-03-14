import { createSlice } from "@reduxjs/toolkit";

import { User } from "@/services/api/data-contracts.ts";

export interface AuthState {
    isAuth: boolean;
    user: User | null;
}

const initialState: AuthState = {
    isAuth: false,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = action.payload;
        },

        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
        },
    },
});

export const { setAuth, setUser } = authSlice.actions;

export default authSlice.reducer;
