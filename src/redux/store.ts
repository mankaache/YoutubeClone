import { configureStore } from '@reduxjs/toolkit';
import { API } from './api';
import { VideoSlice } from './features';

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
    video: VideoSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      API.middleware
      // logger
    ),

  devTools: import.meta.env.PROD ? true : false,
  //   preloadedState:
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;