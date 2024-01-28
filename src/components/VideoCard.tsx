/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaRegCircleCheck } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import {
    demoThumbnailUrl,
    demoChannelTitle,
    demoVideoTitle,
    demoVideoUrl,
    demoChannelUrl
} from '../utils/constant'

const VideoCard = ({ video:{id: {videoId},snippet}  }: any) => {
    return (
      <>
        <div className='w-full hover:scale-105 transition-all sm:w-[328px] md:w-[240px] rounded-lg overflow-hidden'>
          <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <div className='w-full  rounded-lg'>
              <img
                src={
                  snippet?.thumbnails?.high?.url
                    ? snippet?.thumbnails?.high?.url
                    : demoThumbnailUrl
                }
                alt={snippet?.title}
              />
            </div>
          </Link>
          <div className='bg-gray-700 h-auto min-h-[80px] px-3 py-2'>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <div className='text-sm md:text-base font-bold text-white'>
                {snippet?.title.slice(0, 40) + '...' ||
                  demoVideoTitle.slice(0, 40)}
              </div>
            </Link>

            <Link
              to={
                snippet?.channelId
                  ? `/channel/${snippet?.channelId}`
                  : demoChannelUrl
              }
            >
              <div className='flex py-1 justify-start items-center gap-2 text-sm font-bold text-gray-400'>
                {snippet?.channelTitle || demoChannelTitle}
                <FaRegCircleCheck className='text-sm text-gray-400 ml-1' />
              </div>
            </Link>
          </div>
        </div>
      </>
    );
};

export default VideoCard