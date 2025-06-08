import { useNavigate, useParams } from "react-router";
import { Box, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  useMovieDetails,
  useMovieCredits,
  useMovieTrailers,
} from "@/api/MovieDetails/useMovieDetails";
import { Trailers } from "./Trailers";
import { Loading } from "../Loading";
import { MovieDetailsCard } from "./MovieDetailsCard";
import { Image } from "../Image";

export const MovieDetails = () => {
  const { id = "" } = useParams<{ id: string }>();
  const { data: movie, isLoading } = useMovieDetails(id);
  const { data: credits } = useMovieCredits(id);
  const { data: trailers } = useMovieTrailers(id);
  const navigate = useNavigate();

  const trailersList = trailers?.results?.filter(
    (trailer) =>
      trailer.site === "YouTube" && trailer.type === "Trailer" && trailer.key,
  );

  const casts = credits?.cast?.slice(0, 5) || [];

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoading) return <Loading mode="inline" />;

  return (
    <Box sx={{ padding: "20px" }}>
      <Box>
        <IconButton
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
            <Image path={movie?.poster_path} title={movie?.title} />
          </Box>
          <MovieDetailsCard data={movie} casts={casts} />
        </Box>
      </Box>
      {!!trailersList?.length && <Trailers data={trailersList} />}
    </Box>
  );
};
