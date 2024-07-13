import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import ThreadCreate from './ThreadCreate';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/threads/new`} element={<ThreadCreate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App