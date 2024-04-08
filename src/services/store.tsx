import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authenticationSlice } from "./authSlice"; // Import authenticationSlice
import { userSlice } from "./currentUserSlice";
import { orderSlice } from "./orderCreatedSlice";
import { VenduitApi } from "./api";



// Define RootState interface
export interface RootState {
  authentication: ReturnType<typeof authenticationSlice.reducer>;
  user: ReturnType<typeof userSlice.reducer>; // Add user state property
  order: ReturnType<typeof orderSlice.reducer>; // Add user state property
  // Add other slices' state properties here if needed
}

// Configure Redux store
export const store = configureStore({
  reducer: {
    [VenduitApi.reducerPath]: VenduitApi.reducer,
    authentication: authenticationSlice.reducer, // Add authentication reducer to the store
    user: userSlice.reducer, // Add userSlice reducer to the store
    order: orderSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(VenduitApi.middleware),
});

// Define AppDispatch type
export type AppDispatch = typeof store.dispatch;

// Set up listeners
setupListeners(store.dispatch);
