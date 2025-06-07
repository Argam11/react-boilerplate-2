import { useNavigate } from "react-router";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { Movie } from "@/api/types";

interface ListProps {
  data: Movie[];
}

export const List = ({ data }: ListProps) => {
  const navigate = useNavigate();

  const handleNavigate = (movieId: number) => {
    navigate(`/${movieId}`);
  };

  return (
    <Grid container spacing={2} sx={{ marginTop: "20px" }}>
      {data.map((item, i) => {
        return (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card
              sx={{ cursor: "pointer", height: "100%" }}
              onClick={() => handleNavigate(item.id)}
            >
              <img
                style={{
                  height: 300,
                  width: "100%",
                  objectFit: "cover",
                  minHeight: "300px",
                }}
                src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
                alt={item.title}
                loading="lazy"
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
                  <span>{item?.release_date}</span>
                  <span>{Math.round(item?.vote_average * 10) / 10}</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
