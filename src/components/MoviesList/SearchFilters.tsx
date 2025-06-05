import { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

export const SearchFilters = () => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ width: "100%" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <FormControl sx={{ minWidth: "200px" }}>
        <InputLabel id="genre-select-label">Genre</InputLabel>
        <Select
          labelId="genre-select-label"
          id="genre-select"
          label="Genre"
          value={genre}
          onChange={(e: SelectChangeEvent<number>) => {
            setGenre(e.target.value);
          }}
        >
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
