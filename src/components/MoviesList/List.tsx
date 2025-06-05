import { useNavigate } from "react-router";
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
  Grid,
} from "@mui/material";

interface ListProps {
  data: { id: string; title: string; overview: string; poster_path: string }[];
}

export const List = ({ data }: ListProps) => {
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} sx={{ marginTop: "20px" }}>
      {data.map((item) => {
        console.log("item", item);

        return (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card
              sx={{ cursor: "pointer", height: "100%" }}
              onClick={() => navigate(String(item.id))}
            >
              <CardMedia
                sx={{ height: 300 }}
                image={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
                title={item.title}
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
                    "-webkitBoxOrient": "vertical",
                    "-webkitLineClamp": "4",
                    overflow: "hidden",
                  }}
                >
                  {item.overview}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
