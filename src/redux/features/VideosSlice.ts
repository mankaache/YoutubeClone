/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface initialStateType {
  selectedCategory: string;
  videos: Array<{ kind: string; id: any; snippet: any }>;
}

const initialState:initialStateType = {
    selectedCategory: "New",
    videos: []

}

export const VideoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    category: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    videos: (
      state,
      action: PayloadAction<{
        items: Array<{ kind: string; id: any; snippet: any }>;
      }>
    ) => {
      state.videos = action.payload.items;
    },
  },
});

 export const { category } = VideoSlice.actions;
 export const {videos} = VideoSlice.actions