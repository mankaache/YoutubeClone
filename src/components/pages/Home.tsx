import { SideBar } from '../layout'
import {Videos} from '../../components'

const Home = () => {
  return (
    <main className='flex md:flex-row flex-col '>
      <section className='h-auto md:h-[100vh] border-r border-collapse-[#3d3d3d] px-0 md:px-2'>
        <SideBar/>

        <div className='text-white mt-3'>
          &copy; Copyright 2024 Mankaa che
        </div>
      </section>

      <section className='px-7'>
        <div className=' pb-7 font-bold text-3xl text-white'>
          New <span className='text-primary'>Videos</span>
        </div>

        <Videos />
      </section>
    </main>
  )
}

export default Home