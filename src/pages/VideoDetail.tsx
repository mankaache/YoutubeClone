import { Link,useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { FaRegCircleCheck } from 'react-icons/fa6';
import { FaEye } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import {setRecommendedVideos} from '../redux/features'
import {
  useGetVideoDetailsQuery,
  useGetRelatedVideosQuery,
  useGetCommentsThreadQuery,
} from '../redux/api';
import { useTypedDispatch } from '../redux/hooks';
import { videoDetails } from '../redux/features';
import { ResultModal, VideoCard } from '../components';
import { Loading } from '../components/layout';



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
    const {
      data: commentsThread,
      isLoading: commentsLoading,
      error: commentsError,
    } = useGetCommentsThreadQuery({
      part: 'snippet',
      videoId: `${id}`,
      
    });

    console.log('comment:', commentsThread?.items, commentsLoading, commentsError);
    const commentsList = commentsThread?.items;

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
    <div className='px-3 md:px-10 pt-24 h-full'>
      {videoLoading && relatedVideosLoading ? (
        <Loading />
      ) : (
        <div className=''>
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
                      <span className='md:text-3xl '>{channelTitle}</span>
                      <FaRegCircleCheck className='text-primary md:text-2xl ml-1' />
                    </div>
                  </Link>
                  <div className='flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0'>
                    <div className='flex rounded-full bg-gray-400/25 justify-center items-center md:px-5 py-1 lg:py-0'>
                      <p className=' px-2 text-xl font-bold'>
                        {parseInt(likeCount).toLocaleString()} {''}
                      </p>
                      <AiOutlineLike size={28} className='' />
                    </div>
                    <div className='flex rounded-full bg-gray-400/25 justify-center items-center md:px-5'>
                      <p className=' px-2 text-xl font-bold'>
                        {parseInt(viewCount).toLocaleString()} {''}
                      </p>
                      <FaEye size={28} className='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='overflow-auto h-[60em] xl:h-[60em] hidden lg:block'>
              <div>
                {relatedVideosList?.map((item) => (
                  <div key={item.id.videoId} className='mt-2'>
                    <VideoCard video={item} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className='md:w-[90%] bg-gray-400/25 py-3 mt-6 rounded-lg text-sm sm:text-base md:text-xl px-5 text-white'>
            <p className='font-bold py-3 text-2xl'>Description</p>
            <p className='whitespace-wrap'>{description.slice(0, 100)}</p>
          </div>

          {!commentsLoading ?
           (<div className='w-full md:w-[80%]'>
            <div className='text-2xl font-bold text-white w-[80%] mt-10 mb-8'>
              {parseInt(commentCount).toLocaleString()}
              {''} Comments
            </div>
            {commentsList?.map((item) => (
              //@ts-expect-error no-error
              <div key={item.id.videoId} className='md:ml-10 ml-2'>
                <div>
                  <div className='flex flex-col gap-2 mt-2 items-start'>
                    <div className='text-white font-bold md:text-lg'>
                      {
                        item?.snippet?.topLevelComment?.snippet
                          ?.authorDisplayName
                      }
                    </div>
                    <div className='text-gray-400 text-lg'>
                      {item?.snippet?.topLevelComment?.snippet?.textOriginal}
                    </div>
                    <div className=' mb-1 flex rounded-full justify-center gap-x-4 items-center px-2 '>
                      <div className='flex justify-center items-center'>
                        <AiOutlineLike size={23} className='text-white' />
                        <p className=' px-2 text-xl text-white font-bold'>
                          {parseInt(
                            //@ts-expect-error no-error
                            item?.snippet?.topLevelComment?.snippet?.likeCount
                          ).toLocaleString()}{' '}
                          {''}
                        </p>
                      </div>
                      <div className='text-base text-white'>
                        {parseInt(
                          //@ts-expect-error no-error
                          item?.snippet?.totalReplyCount
                        ).toLocaleString()}{' '}
                        <span className='underline '>
                          {item?.snippet?.totalReplyCount > 1 ? 'Replies' : 'Reply'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>) : (<div className='text-white text-xl text-center w-full h-full'>Loading Comments </div>)
          }
        </div>
      )}

      {(VideoDetailsError || relatedVideosError) && (
        <ResultModal error={VideoDetailsError || relatedVideosError} />
      )}
    </div>
  );
}

export default VideoDetail