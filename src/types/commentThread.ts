export interface CommentThread {
  items: Item[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
}

interface Item {
  id: string;
  kind: ItemKind;
  snippet: ItemSnippet;
}

enum ItemKind {
  YoutubeCommentThread = 'youtube#commentThread',
}

interface ItemSnippet {
  canReply: boolean;
  channelId: ChannelID;
  isPublic: boolean;
  topLevelComment: TopLevelComment;
  totalReplyCount: number;
  videoId: VideoID;
}

enum ChannelID {
  UCN1HnUccO4FD5WfM7IthXaw = 'UCN1hnUccO4FD5WfM7ithXaw',
}

interface TopLevelComment {
  id: string;
  kind: TopLevelCommentKind;
  snippet: TopLevelCommentSnippet;
}

enum TopLevelCommentKind {
  YoutubeComment = 'youtube#comment',
}

interface TopLevelCommentSnippet {
  authorChannelId: AuthorChannelID;
  authorChannelUrl: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  canRate: boolean;
  channelId: ChannelID;
  likeCount: number;
  publishedAt: Date;
  textDisplay: string;
  textOriginal: string;
  updatedAt: Date;
  videoId: VideoID;
  viewerRating: ViewerRating;
}

interface AuthorChannelID {
  value: string;
}

enum VideoID {
  The7GhhRHRP6T4 = '7ghhRHRP6t4',
}

enum ViewerRating {
  None = 'none',
}

interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
