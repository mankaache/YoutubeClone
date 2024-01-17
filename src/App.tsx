import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home,VideoDetail,ChannelDetail,Search} from './pages'
import {Navbar} from './components/layout'


const App = () => {
  return (
    <Router>
      <div className='bg-gray-800'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/Channel/:id' element={<ChannelDetail />} />
          <Route path='/Search/:SearchTerm' element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App