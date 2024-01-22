import { Videos } from '../components';
import { useTypedDispatch } from '../redux/hooks';
import { videos } from '../redux/features';
import { useParams } from 'react-router-dom';
import { useGetSearchQuery } from '../redux/api';

const Search = () => {
  const dispatch = useTypedDispatch();

  const {searchTerm} = useParams();

  const {
    data: searchDetails,
    isLoading: loadingDetails,
    error: errorDetails,
  } = useGetSearchQuery({
    part: 'snippet',
    searchTerm: `${searchTerm}`,
  });

  const Allvideos = searchDetails?.items;
  console.log(errorDetails, loadingDetails);

  if (Allvideos) {
    dispatch(videos({ items: Allvideos }));
  }

  return (
    <main className='flex w-full md:flex-row flex-col relative '>
      <section className='px-4 md:px-20 pt-[3rem] md:pt-[6rem]'>
        {loadingDetails ? (
          <div className='text-white text-4xl'>Loading ... </div>
        ) : (
          <>
            <div className='px-4 sm:px-10 mt-20 md:mt-4 w-full md:px-0 pb-7 font-bold text-xl md:text-3xl text-white'>
              Search results for{' '}
              <span className='text-primary'>{searchTerm}</span> videos
            </div>
            <Videos />
          </>
        )}
      </section>
    </main>
  );
};

export default Search;
