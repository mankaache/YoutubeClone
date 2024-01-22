export interface VideoDetails {
  items: Item[];
  kind: string;
  pageInfo: PageInfo;
}

interface Item {
  contentDetails: ContentDetails;
  id: string;
  kind: string;
  snippet: Snippet;
  statistics: Statistics;
}

 interface ContentDetails {
  caption: string;
  contentRating: ContentRating;
  definition: string;
  dimension: string;
  duration: string;
  licensedContent: boolean;
  projection: string;
  regionRestriction: RegionRestriction;
}

 interface ContentRating {}

 interface RegionRestriction {
  blocked: string[];
}

 interface Snippet {
  categoryId: string;
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  localized: Localized;
  publishedAt: Date;
  tags: string[];
  thumbnails: Thumbnails;
  title: string;
}

 interface Localized {
  description: string;
  title: string;
}

 interface Thumbnails {
  default: Default;
  high: Default;
  maxres: Default;
  medium: Default;
  standard: Default;
}

 interface Default {
  height: number;
  url: string;
  width: number;
}

 interface Statistics {
  commentCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}

 interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
