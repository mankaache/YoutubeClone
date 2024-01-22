import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home,VideoDetail,ChannelDetail,Search} from './pages'
import {Navbar,Footer} from './components/layout'


const App = () => {
  return (
    <Router>
      <div className='relative bg-gray-800 h-full'>
        <div className='fixed top-0 z-30 w-full mb-20'>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/Channel/:id' element={<ChannelDetail />} />
          <Route path='/Search/:searchTerm' element={<Search />} />
        </Routes>

        <div>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App