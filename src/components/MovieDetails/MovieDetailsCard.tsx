import { Avatar, Box, Card, Typography } from "@mui/material";

interface MovieDetailsCardProps {
  data:
    | {
        title: string;
        overview: string;
        release_date: string;
        runtime: number;
        genres: { id: number; name: string }[];
      }
    | null
    | undefined;
  casts: {
    id: number;
    name: string;
    profile_path: string | null;
  }[];
}

export const MovieDetailsCard = ({ data, casts }: MovieDetailsCardProps) => {
  return (
    <Card
      sx={{
        padding: 3,
        flex: 1,
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          marginBottom: 2,
          fontWeight: "bold",
        }}
      >
        {data?.title}
      </Typography>
      <Typography variant="body1">{data?.overview}</Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: "10px",
          fontStyle: "italic",
          fontSize: "0.9rem",
        }}
      >
        Release date: {data?.release_date}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: "10px",
          fontStyle: "italic",
          fontSize: "0.9rem",
        }}
      >
        {data?.runtime &&
          `${Math.floor(data.runtime / 60)}h ${data.runtime % 60}m`}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          marginTop: "10px",
          fontStyle: "italic",
          fontSize: "1rem",
        }}
      >
        {data?.genres?.map((genre) => genre.name).join(", ")}
      </Typography>
      <Box marginTop="10px" display="flex" gap="20px" flexWrap="wrap">
        {casts.map((star) => (
          <Box
            key={star.id}
            display="flex"
            flexDirection="column"
            width={"120px"}
          >
            <Avatar
              variant="square"
              sx={{ height: "150px", width: "120px" }}
              alt={star.name}
              src={`https://image.tmdb.org/t/p/w154/${star.profile_path}`}
            />
            <Typography
              variant="body1"
              sx={{
                marginTop: "10px",
                fontStyle: "italic",
                fontSize: "0.9rem",
              }}
            >
              {star.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  );
};
