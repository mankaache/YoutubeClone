import {logo} from '../../utils/constant'
import {NavLink} from 'react-router-dom'
import { SearchBar } from '../layout';

const Navbar = () => {
  return (
    <section className='w-full py-2 '>
      <nav className='flex justify-between items-center w-[90%] mx-auto'>
        <NavLink to='/'>
          <img src={logo} alt='image of a logo' className='w-12 mt-3 h-12' />
        </NavLink>
        <div className='w-[40%]'>
          <SearchBar />
        </div>
      </nav>
    </section>
  );
}

export default Navbar