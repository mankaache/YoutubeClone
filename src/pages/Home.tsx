import { SideBar } from '../components/layout';
import { Videos } from '../components';
import { useTypedSelector } from '../redux/hooks';
import { useTypedDispatch } from '../redux/hooks';
import { videos } from '../redux/features';
// import { useEffect } from 'react';
import { useGetSearchQuery } from '../redux/api';

const Home = () => {
  const dispatch = useTypedDispatch()
  const selectedCategory = useTypedSelector((state)=>state.video.selectedCategory)
  console.log(selectedCategory)
  // const names = 'New'
  const {
    data: searchDetails,
    isLoading: loadingDetails,
    error: errorDetails,
  } = useGetSearchQuery({
    part: 'snippet,id',
    searchTerm: `${selectedCategory}`,
  });

  const Allvideos = searchDetails?.items;
  console.log(errorDetails, loadingDetails);

  if(Allvideos){
     dispatch(videos({ items: Allvideos }));
  }
 


  return (
    <main className='flex md:flex-row flex-col '>
      <section className='h-auto md:h-[100vh] border-r border-collapse-[#3d3d3d] px-0 md:px-2'>
        <SideBar />

        <div className='text-white mt-3'>&copy; Copyright 2024 Mankaa che</div>
      </section>

      <section className='px-7'>
        <div className=' pb-7 font-bold text-3xl text-white'>
          {selectedCategory} <span className='text-primary'>Videos</span>
        </div>
        {loadingDetails ? <div className='text-white text-4xl'>Loading ... </div> : <Videos />}
      </section>
    </main>
  );
};

export default Home;
