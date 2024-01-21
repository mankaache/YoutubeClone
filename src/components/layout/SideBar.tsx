/* eslint-disable react-hooks/exhaustive-deps */
import {categories} from '../../utils/constant'
import { useTypedDispatch } from '../../redux/hooks';
import { category } from '../../redux/features';
import { useEffect, useState } from 'react';

const SideBar = () => {
    const dispatch = useTypedDispatch()
    const [selectedCategory,setSelectedCategory] = useState('New')

   const handleCategoryChange = (newCategory: string) => {
     dispatch(category(newCategory));
     setSelectedCategory(newCategory);
   };

   useEffect(() => {
     handleCategoryChange(selectedCategory);
   }, [selectedCategory, dispatch]);

  return (
    <section className='side md:pb-10 md:pr-4 overflow-y-auto h-auto md:h-[92%] mt-20 z-30 flex items-center justify-between md:flex-col'>
      {categories.map((category) => (
        <button
          onClick={() => {
            setSelectedCategory(category.name);
          }}
          key={category.name}
          className='category-btn text-white'
          style={{
            //@ts-expect-error no- error now
            background: category.name === selectedCategory && '#fc1503',
            color: 'white',
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? 'white' : 'red',
              marginRight: '15px',
            }}
            className='text-xl'
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? '1' : '0.7',
              marginRight: '15px',
              whiteSpace: 'nowrap',
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </section>
  );
}

export default SideBar