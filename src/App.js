import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './reset.css';
import '@picocss/pico';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogView from './components/BlogView';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blogview/:postId' element={<BlogView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
