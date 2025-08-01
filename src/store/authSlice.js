import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
    isAuthenticated: !!localStorage.getItem('user'),
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        signup: (state, action) => {
            const newUser = action.payload;
            let users = [];
            try {
                users = JSON.parse(localStorage.getItem('users')) || [];
                if (!Array.isArray(users)) users = [];
            } catch {
                users = [];
            }
            const userExists = users.find(u => u.email === newUser.email);
            if (userExists) {
                throw new Error("User already exists with this email");
            }

            const updatedUsers = [...users, newUser];
            localStorage.setItem('users', JSON.stringify(updatedUsers));

            state.user = newUser;
            state.isAuthenticated = true;
            localStorage.setItem('user', JSON.stringify(newUser));
},

        login: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem('user', JSON.stringify(state.user));
        }, 
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem('user');
        }
    }
})

export const { signup, login, logout } = authSlice.actions;
export default authSlice.reducer;
