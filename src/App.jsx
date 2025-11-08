import { Routes, Route } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Search from './Pages/Search';
import Series from './Pages/Series';
import Movie from './Pages/Movies';
import Trending from './Pages/Trending';
import { MovieProvider } from './contexts/MovieContext';
import "./styles/App.css";


function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/series" element={<Series />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </main>
      <Footer />
    </MovieProvider>
  );
}

export default App;
