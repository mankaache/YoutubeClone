/* eslint-disable @typescript-eslint/no-explicit-any */


const ResultModal = ({error}:any) => {
  return (
    <div className=' flex justify-center mt-20 px-4 py-3 h-screen'>
      <div>
        <div className='bg-white w-[500px] min-h-[200px] rounded-lg overflow-hidden'>
          <div className='w-full bg-primary py-3 text-white'>
            <h3 className='text-center text-2xl font-bold'>Error</h3>
          </div>
          <div className='flex justify-center items-center mt-10 text-center text-2xl py-5 px-2'>
            {error?.error}
          </div>

          <div className='w-full flex justify-center items-center mt-8 mb-5'>
            <button
              onClick={() => {
                window.location.reload();
              }}
              className='border-primary border px-6 py-1 text-center rounded-lg font-bold text-lg hover:text-white hover:bg-primary hover:border-none transition-all'
            >
              Try again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultModal