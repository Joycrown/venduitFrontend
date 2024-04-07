import { createSlice, PayloadAction } from '@reduxjs/toolkit';



export interface User {
  vendor_id: string;
  buyer_id: string;
  full_name: string;
  email: string;
  user_type: string;

 
  }


// Define initial state
interface UserState {
  user: User | null; // Update the type to use the User interface
  loading: boolean;
  error: string | null;
}
const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

// Create slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to set user data
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    // Action to set loading state
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    // Action to set error state
    setError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    // Action to remove user data
    removeUser: (state) => {
      state.user = null;
    },
  },
});

// Export actions
export const { setUser, setLoading, setError, removeUser } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
