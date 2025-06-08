import { Box, Typography } from "@mui/material";
import { MovieGrid } from "@components/MoviesList/MovieGrid";
import { MovieGridItem } from "@components/MoviesList/MovieGridItem";
import { MovieCard } from "@components/MoviesList/MovieCard";
import { useFavoriteMovies } from "@/hooks/useFavoriteMovies"; // adjust import path as needed
import { VirtuosoGrid } from "react-virtuoso";

const gridComponents = {
  List: MovieGrid,
  Item: MovieGridItem,
} as const;

export const Favorites = () => {
  const { favoriteMovies, isInitialized } = useFavoriteMovies();

  return (
    <Box sx={{ padding: "20px" }}>
      <Box marginTop={4}>
        {!isInitialized ? (
          <Typography sx={{ textAlign: "center", paddingTop: "20px" }}>
            Loading favorites...
          </Typography>
        ) : favoriteMovies.length === 0 ? (
          <Typography sx={{ textAlign: "center", paddingTop: "20px" }}>
            You haven’t added any favorite movies yet.
          </Typography>
        ) : (
          <VirtuosoGrid
            useWindowScroll
            style={{ height: "100vh" }}
            totalCount={favoriteMovies.length}
            components={gridComponents}
            data={favoriteMovies}
            itemContent={(_, movie) => <MovieCard item={movie} />}
          />
        )}
      </Box>
    </Box>
  );
};
