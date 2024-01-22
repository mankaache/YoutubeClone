import { useTypedSelector } from '../redux/hooks'
import { VideoCard,ChannelCard } from '../components';

const Videos = () => {
    const vids = useTypedSelector((state)=> state.video.videos)
    console.log(vids)
   
  return (
    <div className='flex flex-wrap justify-center gap-3 items-center'>
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
}

export default Videos