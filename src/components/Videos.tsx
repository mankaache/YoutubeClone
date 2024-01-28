/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTypedSelector } from '../redux/hooks'
import { VideoCard,ChannelCard } from '../components';

interface VideosProps {
  marginLeft : boolean
}

const Videos = ({marginLeft}:VideosProps) => {
  const vids = useTypedSelector((state) => state.video.videos);
  console.log(vids);

  return (
    <div
      className={`${marginLeft ? 'sm:ml-10' : 'ml-0'} flex flex-wrap px-3 sm:px-0 justify-center md:justify-start gap-5 sm:gap-3 items-center`}
    >
      {vids.map((item, idx) => (
        <div
          onClick={() => {
            console.log(item);
          }}
          key={idx}
        >
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos