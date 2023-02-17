import { configureStore } from "@reduxjs/toolkit";
import { routesApi } from "../services/RoutesServices";
import { authApi } from "../services/AuthService";
import { authSlice } from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    [routesApi.reducerPath]: routesApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    auth: authSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routesApi.middleware, authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;