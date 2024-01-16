import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  return (
    <form className='h-6 relative w-full ' onSubmit={()=>{}}>
    <button type='submit'>
        <FiSearch size={26} className='absolute top-1/2 right-3 text-red-500' />
      </button>
      <input
        type='search'
        onChange={()=>{}}
        placeholder='search ...'
        className='py-3 grow-1 rounded-full w-full border-none outline-none px-4 focus:border-gray-400'

      />
    </form>
  );
};

export default SearchBar;
