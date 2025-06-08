import { useGenres } from "@api/GenresList/useGenres";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { SearchFiltersProps } from "./types";

export const SearchFilters = ({
  search,
  genre,
  onChangeSearch,
  onChangeGenre,
}: SearchFiltersProps) => {
  const { data: genres } = useGenres();
  const genresList = genres?.genres || [];

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <TextField
        type="search"
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ width: "100%" }}
        value={search}
        onChange={onChangeSearch}
      />
      <FormControl sx={{ minWidth: "200px" }}>
        <InputLabel id="genre-select-label">Genre</InputLabel>
        <Select
          data-testid="genre-select"
          labelId="genre-select-label"
          id="genre-select"
          label="Genre"
          value={search ? 0 : genre}
          onChange={onChangeGenre}
          disabled={!!search}
          MenuProps={{
            PaperProps: {
              sx: {
                maxHeight: 300,
              },
            },
          }}
        >
          <MenuItem value={0}>All</MenuItem>
          {genresList.map((genre) => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
