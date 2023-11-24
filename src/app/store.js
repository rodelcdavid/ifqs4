import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import authReducer from "../slices/authSlice";
import dialogReducer from "../slices/dialogSlice";
import { fqsApi } from "../services/fqsApi";

export const store = configureStore({
  reducer: {
    authState: authReducer,
    dialogState: dialogReducer,
    [fqsApi.reducerPath]: fqsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(fqsApi.middleware),
});

setupListeners(store.dispatch);
