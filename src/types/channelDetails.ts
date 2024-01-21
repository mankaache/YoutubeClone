export interface ChannelDetails {
  id: string;
  kind: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: {
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  brandingSettings: {
    channel: {
      country: string;
      description: string;
      keywords: string;
      title: string;
      unsubscribedTrailer: string;
    };
    image: {
      bannerExternalUrl:string;
    };
  };
  contentDetails: {
    relatedPlaylists: {
      likes: string;
      uploads: string;
    };
  };
  statistics: {
    viewCount: string;
    subscriberCount: string;
    hiddenSubscriberCount: boolean;
  };
}

