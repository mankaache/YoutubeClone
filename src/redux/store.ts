import { configureStore } from '@reduxjs/toolkit';
import { API } from './api';
import { VideoSlice } from './features';

export const store = configureStore({
  reducer: {
    [API.reducerPath]: API.reducer,
    video: VideoSlice.reducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;