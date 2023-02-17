import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

import { IAuth } from '../../interfaces/login';

const initialState: IAuth = {
    token: '',
    isAuthenticated: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            state.isAuthenticated = true;
        }
    }
});

export const { login } = authSlice.actions;

export default authSlice.reducer;

export const selectToken = (state: RootState) => state.auth.token;

export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;