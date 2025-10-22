import { create } from 'zustand';

export const useMovieStore = create((set) => ({
  movies: [],
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  
  fetchMovies: async (query = '', page = 1) => {
    set({ loading: true, error: null });
    try {
      const url = query 
        ? `${import.meta.env.VITE_API_BASE_URL}/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${query}&page=${page}`
        : `${import.meta.env.VITE_API_BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_API_KEY}&page=${page}`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch movies');
      
      const data = await response.json();
      set({ 
        movies: data.results,
        currentPage: data.page,
        totalPages: data.total_pages,
        loading: false 
      });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
  
  toggleFavorite: (movie) => {
    set((state) => {
      const isFavorite = state.favorites.some(fav => fav.id === movie.id);
      let newFavorites;
      
      if (isFavorite) {
        newFavorites = state.favorites.filter(fav => fav.id !== movie.id);
      } else {
        newFavorites = [...state.favorites, movie];
      }
      
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
      return { favorites: newFavorites };
    });
  },
}));