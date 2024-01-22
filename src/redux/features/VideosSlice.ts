/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChannelDetails } from '../../types/channelDetails';
import {ChannelVideos} from '../../types/channelVideos'
import { VideoDetails } from '../../types/videoDetails';
import { RelatedVideos } from '../../types/relatedVideos';

interface initialStateType {
  selectedCategory: string;
  videos: Array<{ kind: string; id: any; snippet: any }>;
  setChanneldetails: ChannelDetails | null;
  channelVideos: ChannelVideos | null;
  videoDetails: VideoDetails | null;
  recomendedVideos: RelatedVideos | null;
}

const initialState: initialStateType = {
  selectedCategory: 'New',
  videos: [],
  setChanneldetails: null,
  channelVideos: null,
  videoDetails: null,
  recomendedVideos: null,
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
  videoDetails:(state,action:PayloadAction<VideoDetails>)=>{
    state.videoDetails = action.payload
  },
  setRecommendedVideos:(state,action:PayloadAction<RelatedVideos>)=>{
    state.recomendedVideos = action.payload
  }
}
});

 export const { category,setRecommendedVideos, allChannelVideos, videos, videoDetails, setChanneldetails } =
   VideoSlice.actions;