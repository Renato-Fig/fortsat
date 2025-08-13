import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Homepage } from './pages/Homepage'
import { Fortsun } from './pages/Fortsun'
import { Fortlog } from './pages/Fortlog'
import { BlogPost } from './pages/BlogPost'

import './styles/global.css'
import './index.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/fortsun' element={<Fortsun />} />
          <Route path='/fortlog' element={<Fortlog />} />
          <Route path='/postagem/:id' element={<BlogPost />} />
        </Routes>
      </Router>
    </>
  )
}

export default App