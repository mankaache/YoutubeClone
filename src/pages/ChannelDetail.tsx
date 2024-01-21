import { useParams } from 'react-router-dom'
import { useGetChannelQuery, useGetChannelVideosQuery } from '../redux/api'
import { setChanneldetails, allChannelVideos } from '../redux/features';
import { useTypedDispatch } from '../redux/hooks'
import { ChannelCard, VideoCard } from '../components';

const ChannelDetail = () => {
  const dispatch = useTypedDispatch();
  const { id } = useParams();

  const {
    data: channelDetails,
    isLoading,
    error: errorDetails,
  } = useGetChannelQuery({
    part: 'snippet',
    id: `${id}`,
  });

  const {
    data: channelVideos,
    isLoading: loadingVideos,
    error: errorVideos,
  } = useGetChannelVideosQuery({ channelId: `${id}`, part: 'snippet' });

  //@ts-expect-error no-error
  const details = channelDetails?.items[0];

  const videos = channelVideos?.items;

  if (channelDetails?.items) {
    //@ts-expect-error no-error
    dispatch(setChanneldetails(channelDetails?.items[0]));
  }

  if (channelVideos?.items) {
    //@ts-expect-error no-error
    dispatch(allChannelVideos(channelVideos?.items));
  }

  console.log(isLoading, errorDetails);
  console.log(channelVideos?.items, loadingVideos, errorVideos);

  return (
    <div className='w-full py-4'>
      <div className='h-[300px] channelBg z-10 mt-5'>
        <div>
          <ChannelCard channel={details} mt='mt-80' />
        </div>
      </div>
      <div className=' mx-auto flex mt-52 justify-center items-center gap-4 flex-wrap ' >
        {videos &&
          videos.map((item) => (
            <div key={item.id.videoId}>
              <VideoCard video={item} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ChannelDetail