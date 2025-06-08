import { useNavigate, useParams } from "react-router";
import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  useMovieDetails,
  useMovieCredits,
  useMovieTrailers,
} from "@api/MovieDetails/useMovieDetails";
import { Loading } from "../Loading";
import { MovieDetailsCard } from "./MovieDetailsCard";
import { Image } from "../Image";
import { Trailers } from "@components/Trailers";
import { useRedirectToNotFound } from "@hooks/useRedirectToNotFound";
import { MOVIE_POSTER_SRC_BASE } from "@constants/common";

export const MovieDetails = () => {
  const navigate = useNavigate();
  const { id = "" } = useParams<{ id: string }>();

  const {
    data: movie,
    isLoading: isMovieLoading,
    error: movieError,
  } = useMovieDetails(id);

  const { data: credits } = useMovieCredits(id);
  const { data: trailers } = useMovieTrailers(id);

  const trailersList = trailers?.results?.filter(
    (trailer) =>
      trailer.site === "YouTube" && trailer.type === "Trailer" && trailer.key,
  );

  const casts = credits?.cast?.slice(0, 5) || [];

  const handleBack = () => {
    navigate(-1);
  };

  useRedirectToNotFound(movieError, movie, isMovieLoading);

  if (isMovieLoading) return <Loading mode="inline" />;

  return (
    !!movie && (
      <Box sx={{ padding: "20px" }}>
        <Box>
          <IconButton
            data-testid="movie-details-back-button"
            onClick={handleBack}
            sx={{
              color: (theme) => theme.palette.text.primary,
              marginBottom: "20px",
            }}
          >
            <ArrowBackIcon />
          </IconButton>
          <Box
            display="flex"
            gap={2}
            sx={{
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <Image
                src={`${MOVIE_POSTER_SRC_BASE}${movie.poster_path}`}
                title={movie?.title}
                style={{ minWidth: 342 }}
              />
            </Box>
            <MovieDetailsCard data={movie} casts={casts} />
          </Box>
        </Box>
        {!!trailersList?.length && <Trailers data={trailersList} />}
      </Box>
    )
  );
};
