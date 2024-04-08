import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  access_token: string | null;
  refresh_token: string | null;
  user_type: string | null ;
  current_user: string | null; // Replace YourUserType with the type of your current_user
}

const initialState: AuthState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  access_token: localStorage.getItem('access_token'),
  refresh_token: localStorage.getItem('refresh_token'),
  user_type: localStorage.getItem('user_type'),
  current_user: localStorage.getItem('current_user') ? JSON.parse(localStorage.getItem('current_user') as string) : null,
};

export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
      state.current_user = action.payload.current_user;
      state.user_type = action.payload.user_type;

      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('access_token', action.payload.access_token);
      localStorage.setItem('refresh_token', action.payload.refresh_token);
      localStorage.setItem('user_type', action.payload.user_type);
      localStorage.setItem('current_user', JSON.stringify(action.payload.current_user));
    },
    logoutSuccess: (state) => {
      state.isAuthenticated = false;
      state.access_token = null;
      state.refresh_token = null;
      state.current_user = null;
      state.user_type = null

      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('current_user');
      localStorage.removeItem('user_type');
    },
  },
});

export const { loginSuccess, logoutSuccess } = authenticationSlice.actions;

export default authenticationSlice.reducer;
