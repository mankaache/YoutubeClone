/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constant';
import { FaRegCircleCheck } from 'react-icons/fa6';

const ChannelCard = ({channel}:any) => {
    console.log(channel)
  return (
    <div className='rounded-[20px] flex justify-center items-center w-[356px] md:w-[320px] h-[326px] m-auto'>
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <div className='flex flex-col justify-center text-center text-white'>
          <div>
            <img
              src={
                channel?.snippet?.thumbnails?.default?.url || demoProfilePicture
              }
              alt={channel?.snippet?.title}
              className='rounded-full h-[180px] w-[180px]'
            />
          </div>
          <div className='text-3xl flex py-2 justify-start items-center gap-2'>
            {channel?.snippet?.title}
            <FaRegCircleCheck className='text-2xl text-gray-400 ml-1' />
          </div>
          {
           channel?.statistics?.subscriberCount && (
            <div>
                {
                    parseInt(channel?.statistics?.subscriberCount).toLocaleString()
                } Subscribers
            </div>
           )
          }
        </div>
      </Link>
    </div>
  );
}

export default ChannelCard