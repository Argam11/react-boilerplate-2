import { useEffect, useState } from "react";
import { MovieDetailsApi } from "@api/types";
import { FAVORITE_MOVIES_KEY } from "@constants/common";

export const useFavoriteMovies = () => {
  const [favoriteMovies, setFavoriteMovies] = useState<MovieDetailsApi[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(FAVORITE_MOVIES_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setFavoriteMovies(parsed);
        }
      }
    } catch {
      setFavoriteMovies([]);
    } finally {
      setIsInitialized(true);
    }
  }, []);

  const isFavorite = (id: number) =>
    favoriteMovies.some((movie) => movie.id === id);

  const addFavorite = (movie: MovieDetailsApi) => {
    if (!isFavorite(movie.id)) {
      const updated = [...favoriteMovies, movie];
      setFavoriteMovies(updated);
      localStorage.setItem(FAVORITE_MOVIES_KEY, JSON.stringify(updated));
    }
  };

  const removeFavorite = (id: number) => {
    const updated = favoriteMovies.filter((movie) => movie.id !== id);
    setFavoriteMovies(updated);
    localStorage.setItem(FAVORITE_MOVIES_KEY, JSON.stringify(updated));
  };

  const toggleFavorite = (movie: MovieDetailsApi) => {
    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return {
    favoriteMovies,
    isFavorite,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isInitialized,
  };
};
