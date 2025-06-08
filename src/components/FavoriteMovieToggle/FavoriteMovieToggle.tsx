import { Skeleton } from "@mui/material";
import { useFavoriteMovies } from "@hooks/useFavoriteMovies";
import { FavoriteStar } from "@components/FavoriteStar";
import { MovieDetailsApi } from "@api/types";

interface FavoriteMovieToggleProps {
  movie: MovieDetailsApi;
}

export const FavoriteMovieToggle = ({ movie }: FavoriteMovieToggleProps) => {
  const { isFavorite, toggleFavorite, isInitialized } = useFavoriteMovies();

  if (!isInitialized) {
    return <Skeleton variant="circular" height={32} width={32} />;
  }

  return (
    <FavoriteStar
      isFavorite={isFavorite(movie.id)}
      onToggle={() => toggleFavorite(movie)}
    />
  );
};
