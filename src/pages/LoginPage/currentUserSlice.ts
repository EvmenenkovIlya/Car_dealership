import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { User } from '../../models/user';

interface CurrentUser {
  theme: 'light' | 'dark';
  isAuthenticated: boolean;
  accessToken: string | null;
  error: string | null;
}

const initialState: CurrentUser = {
  theme: 'light',
  isAuthenticated: false,
  accessToken: '',
  error: '',
};

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true;
      state.accessToken = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = currentUserSlice.actions;

export const currentUserReducer = currentUserSlice.reducer;