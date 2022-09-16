import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import DetailPage from './components/DetailPage';
import EditPage from './components/EditPage';
import PostPage from './components/PostPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='/edit/:id' element={<EditPage />} />
        <Route path='/post' element={<PostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
