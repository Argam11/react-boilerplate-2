import { Box, Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import { Image } from "../Image";
import { MovieCardProps } from "./types";
import { MOVIE_POSTER_SRC_BASE } from "@constants/common";

export const MovieCard = ({ item }: MovieCardProps) => {
  const navigate = useNavigate();

  const handleNavigate = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <Card
      role="button"
      sx={{ cursor: "pointer", height: "100%" }}
      onClick={() => handleNavigate(item.id)}
    >
      <Image
        src={`${MOVIE_POSTER_SRC_BASE}${item.poster_path}`}
        title={item.title}
        style={{ height: 300 }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: "4",
            overflow: "hidden",
          }}
        >
          {item.overview}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginTop: "10px",
            color: "rgba(255, 255, 255, 0.8)",
            fontStyle: "italic",
            fontSize: "0.9rem",
            display: "flex",

            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box component="span">{item.release_date}</Box>
          <Box component="span">{Math.round(item?.vote_average * 10) / 10}</Box>
        </Typography>
      </CardContent>
    </Card>
  );
};
