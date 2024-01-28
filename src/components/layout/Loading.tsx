

const Loading = () => {
  return (
    <div className='flex justify-center flex-col items-center h-[80vh] overflow-hidden w-full mb-20'>
        <div className='flex flex-row gap-2'>
            <div className='w-5 sm:w-7 h-5 sm:h-7 rounded-full bg-red-700 animate-bounce [animation-delay:.4s]'></div>
            <div className='w-5 sm:w-7 h-5 sm:h-7 rounded-full bg-red-700 animate-bounce [animation-delay:.2s]'></div>
            <div className='w-5 sm:w-7 h-5 sm:h-7 rounded-full bg-red-700 animate-bounce [animation-delay:.4s]'></div>
        </div>
        <div className='text-white text-2xl sm:text-3xl mt-5 font-bold'>
            Loading ...
        </div>
    </div>
  );
}

export default Loading