import {categories} from '../../utils/constant'
import { useTypedDispatch } from '../../redux/hooks';
import { category } from '../../redux/features';

const SideBar = () => {
    const dispatch = useTypedDispatch()
    const selectedCategory = 'Coding'
    dispatch(category(selectedCategory))

  return (
    <section className='overflow-y-auto h-auto md:h-[95%] flex items-center justify-between md:flex-col'>
      {categories.map((category) => (
        <button
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