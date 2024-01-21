export interface ChannelVideos {
  items: Item[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  regionCode: string;
}

 interface Item {
  id: ID;
  kind: ItemKind;
  snippet: Snippet;
}

interface ID {
  kind: IDKind;
  playlistId?: string;
  videoId?: string;
}

 enum IDKind {
  YoutubePlaylist = 'youtube#playlist',
  YoutubeVideo = 'youtube#video',
}

enum ItemKind {
  YoutubeSearchResult = 'youtube#searchResult',
}

interface Snippet {
  channelId: ChannelID;
  channelTitle: ChannelTitle;
  description: string;
  liveBroadcastContent: LiveBroadcastContent;
  publishTime: Date;
  publishedAt: Date;
  thumbnails: Thumbnails;
  title: string;
}

enum ChannelID {
  UCBVjMGOIkavEAhyqpxJ73DW = 'UCBVjMGOIkavEAhyqpxJ73Dw',
}

enum ChannelTitle {
  Maroon5 = 'Maroon 5',
}

enum LiveBroadcastContent {
  None = 'none',
}

interface Thumbnails {
  default: Default;
  high: Default;
  medium: Default;
}

 interface Default {
  height: number;
  url: string;
  width: number;
}

 interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
