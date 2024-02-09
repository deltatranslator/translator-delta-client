import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    reload: false,
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = [...action.payload] || [];
        },
        reloadUsers: (state, action) => {
            state.reload = !state.reload;
        },
    },
});

export const { setUsers, reloadUsers } =
    usersSlice.actions;

export default usersSlice.reducer;
