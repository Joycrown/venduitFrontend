import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderItemOut } from '.';



// Define initial state
interface OrderState {
  order: OrderItemOut | null; // Update the type to use the User interface
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  order: null,
  loading: false,
  error: null,
};

// Create slice
export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    // Action to set user data
    setOrder: (state, action: PayloadAction<OrderItemOut | null>) => {
      state.order = action.payload;
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
      state.order = null;
    },
  },
});

// Export actions
export const { setOrder, setLoading, setError, removeUser } = orderSlice.actions;

// Export reducer
export default orderSlice.reducer;
