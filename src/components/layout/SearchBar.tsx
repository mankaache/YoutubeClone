/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

  const [searchTerm,setSearchTerm] = useState('')

  const navigate = useNavigate()

  const handleSubmit=(e:any)=>{
      e.preventDefault()

      if(searchTerm){
        navigate(`/search/${searchTerm}`)

        setSearchTerm('')

      }
  }

  return (
    <form className='h-6 relative w-full ' onSubmit={handleSubmit}>
    <button type='submit'>
        <FiSearch size={26} className='absolute top-1/2 right-3 text-red-500' />
      </button>
      <input
        type='search'
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}
        placeholder='search ...'
        className='py-3 grow-1 rounded-full w-full border-none outline-none px-4 focus:border-gray-400'

      />
    </form>
  );
};

export default SearchBar;

