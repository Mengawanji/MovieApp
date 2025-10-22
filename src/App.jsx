import { Routes, Route } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';
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
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
