/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/constant';
import { FaRegCircleCheck } from 'react-icons/fa6';

const ChannelCard = ({channel,mt}:any) => {
  return (
    <div className='rounded-[20px] flex justify-center items-center w-[270px] md:w-[280px] h-[300px] m-auto'>
      <Link to={`/channel/${channel?.id?.channelId}`}>
        <div className={`flex w-full flex-col ${mt} justify-center text-center text-white`}>
          <div>
            <img
              src={
                channel?.snippet?.thumbnails?.high?.url || demoProfilePicture
              }
              alt={channel?.snippet?.title}
              className='rounded-full h-[180px] w-[180px] ml-9'
            />
          </div>
          <div className='font-bold text-2xl mt-3 flex py-2 justify-start items-center gap-2'>
            {channel?.snippet?.title}
            <FaRegCircleCheck className='text-xl text-primary ml-1' />
          </div>
          {
           channel?.statistics?.subscriberCount && (
            <div className='font-bold text-lg'>
                {
                    parseInt(channel?.statistics?.subscriberCount).toLocaleString()
                }{' '} Subscribers
            </div>
           )
          }
        </div>
      </Link>
    </div>
  );
}

export default ChannelCard