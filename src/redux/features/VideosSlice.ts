import { createSlice, PayloadAction } from '@reduxjs/toolkit';
interface initialStateType {
    selectedCategory? : string
}

const initialState:initialStateType = {
    selectedCategory: undefined

}

export const VideoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    category: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
  },
});

 export const { category } = VideoSlice.actions;