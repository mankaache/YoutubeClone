/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constant';
import { FaRegCircleCheck } from 'react-icons/fa6';

const ChannelCard = ({channel,mt}:any) => {
  return (
    <div className='rounded-[20px] flex justify-center items-center w-[220px] md:w-[250px] h-[200px] m-auto'>
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <div
          className={`flex w-full flex-col ${mt} justify-center text-center text-white`}
        >
          <div className='flex justify-center items-center mt-5 md:mt-10'>
            <img
              src={
                channel?.snippet?.thumbnails?.high?.url
                  ? channel?.snippet?.thumbnails?.high?.url
                  : demoProfilePicture
              }
              alt={channel?.snippet?.title}
              className='rounded-full h-[120px] w-[120px] md:h-[160px] md:w-[160px]'
            />
          </div>

          <div className='flex justify-center items-center'>
            <div className='font-bold text-2xl mt-1 flex py-1 justify-start items-center gap-2'>
              {channel?.snippet?.title}
              <FaRegCircleCheck className='text-xl text-primary ml-1' />
            </div>
          </div>
          {channel?.statistics?.subscriberCount && (
            <div className='font-bold text-lg text-center'>
              {parseInt(channel?.statistics?.subscriberCount).toLocaleString()}{' '}
              Subscribers
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}

export default ChannelCard