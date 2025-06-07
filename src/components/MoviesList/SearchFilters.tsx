import { useGenres } from "@api/GenresList/useGenres";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

interface SearchFiltersProps {
  search?: string;
  genre?: number;
  onChangeSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeGenre?: (event: SelectChangeEvent<number>) => void;
}

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
          labelId="genre-select-label"
          id="genre-select"
          label="Genre"
          value={genre}
          onChange={onChangeGenre}
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
