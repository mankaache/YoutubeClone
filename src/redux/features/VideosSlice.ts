/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChannelDetails } from '../../types/channelDetails';
import {ChannelVideos} from '../../types/channelVideos'


interface initialStateType {
  selectedCategory: string;
  videos: Array<{ kind: string; id: any; snippet: any }>;
  setChanneldetails: ChannelDetails | null;
  channelVideos: ChannelVideos | null;
}

const initialState: initialStateType = {
  selectedCategory: 'New',
  videos: [],
  setChanneldetails: null,
  channelVideos: null,
};

export const VideoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    category: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    videos: (state,action: PayloadAction<{items: Array<{ kind: string; id: any; snippet: any }>}>) => {
      state.videos = action.payload.items;
    },
    setChanneldetails: (state,action: PayloadAction< ChannelDetails >) => {
      state.setChanneldetails = action.payload;
    },
    allChannelVideos:(state,action:PayloadAction<ChannelVideos>)=>{
      state.channelVideos = action.payload
  },
}
});

 export const { category, allChannelVideos, videos, setChanneldetails } =
   VideoSlice.actions;