import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ThreadCreate from './ThreadCreate';
import PostsList from './PostsList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/threads/new`} element={<ThreadCreate />} />
          <Route path={`/threads/:id`} element={<PostsList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App