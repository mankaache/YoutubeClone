import { Link,useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { FaRegCircleCheck } from 'react-icons/fa6';
import { FaEye } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import {setRecommendedVideos} from '../redux/features'
import {
  useGetVideoDetailsQuery,
  useGetRelatedVideosQuery,
} from '../redux/api';
import { useTypedDispatch } from '../redux/hooks';
import { videoDetails } from '../redux/features';
import { VideoCard } from '../components';



const VideoDetail = () => {
  const { id } = useParams();
  const dispatch = useTypedDispatch();
  const {
    data: videocontents,
    isLoading: videoLoading,
    error: VideoDetailsError,
  } = useGetVideoDetailsQuery({
    part: 'contentDetails,snippet,statistics',
    id: `${id}`,
  });

  console.log(videocontents?.items[0], videoLoading, VideoDetailsError);

  const {
    data: relatedVideos,
    isLoading: relatedVideosLoading,
    error: relatedVideosError,
  } = useGetRelatedVideosQuery({
    part: 'snippet,id',
    type: 'video',
    relatedToVideoId: `${id}`,
  });

 
  const relatedVideosList = relatedVideos?.items;

  dispatch(
    //@ts-expect-error no-error
    setRecommendedVideos(relatedVideos?.items)
  );

  console.log(relatedVideos?.items, relatedVideosLoading, relatedVideosError);

  const details = videocontents?.items[0];
  if (!details?.snippet) return 'Loading...';

  const {
    snippet: {
      title,
      channelId,
      description,
      channelTitle,
      thumbnails: {
        high: { url },
      },
    },
    statistics: { viewCount, likeCount, commentCount },
  } = details;

  dispatch(
    //@ts-expect-error no-error
    videoDetails(videocontents?.items[0])
  );

  return (
    <div className='px-3 md:px-10 pt-24'>
      <div className='flex flex-col md:flex-row gap-4'>
        <div className='flex-1'>
          <div className='w-full sticky top-[86px]'>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            <div className='text-white font-bold text-lg md:text-3xl pt-6 pb-5'>
              {title}
            </div>
            <div className='flex justify-between flex-col lg:flex-row text-white py-1 px-3'>
              <Link
                className=' font-bold flex justify-start items-center gap-3 text-white'
                to={`/channel/${channelId}`}
              >
                <img
                  src={url}
                  alt={channelTitle}
                  className='w-[60px] h-[60px] rounded-full'
                />
                <div className='flex items-center gap-2'>
                  <span className='md:text-3xl whitespace-nowrap'>{channelTitle}</span>
                  <FaRegCircleCheck className='text-primary md:text-2xl ml-1' />
                </div>
              </Link>
              <div className='flex gap-3 mt-4 lg:mt-0'>
                <div className='flex rounded-full bg-gray-400/25 justify-center items-center px-5 py-1 lg:py-0'>
                  <p className=' px-2 text-xl font-bold'>
                    {parseInt(likeCount).toLocaleString()} {''}
                  </p>
                  <AiOutlineLike size={28} className='' />
                </div>
                <div className='flex rounded-full bg-gray-400/25 justify-center items-center px-5'>
                  <p className=' px-2 text-xl font-bold'>
                    {parseInt(viewCount).toLocaleString()} {''}
                  </p>
                  <FaEye size={28} className='' />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='overflow-auto h-[70em] xl:h-[40em] hidden lg:block'>
          <div>
          {relatedVideosList?.map((item) => (
            <div key={item.id.videoId} className='mt-2'>
              <VideoCard video={item} />
            </div>
          )
          )}
          </div>
        </div>
      </div>

      <div className='md:w-[90%] bg-gray-400/25 py-3 mt-6 rounded-lg text-sm sm:text-base md:text-xl px-5 text-white'>
        <p className='font-bold py-3 text-2xl'>Description</p>
        {description}
      </div>

      <div>
        <div className='text-2xl font-bold text-white w-[80%] mt-10'>
          {parseInt(commentCount).toLocaleString()}
          {''} Comments
        </div>
      </div>
    </div>
  );
}

export default VideoDetail