export interface RelatedVideos {
  items: Item[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
}

 interface Item {
  id: ID;
  kind: ItemKind;
  snippet: Snippet;
}

 interface ID {
  kind: IDKind;
  videoId: string;
}

 enum IDKind {
  YoutubeVideo = 'youtube#video',
}

 enum ItemKind {
  YoutubeSearchResult = 'youtube#searchResult',
}

 interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: LiveBroadcastContent;
  publishTime: Date;
  publishedAt: Date;
  thumbnails: Thumbnails;
  title: string;
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
