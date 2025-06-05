import { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from '@mui/material';

export const SearchFilters = () => {
  const [genre, setGenre] = useState<string | number | null>(null);

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '10px',
        flexDirection: { xs: 'column', md: 'row' },
      }}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        sx={{ width: '100%' }}
      />
      <FormControl sx={{ minWidth: '200px' }}>
        <InputLabel id="genre-select-label">Genre</InputLabel>
        <Select
          labelId="genre-select-label"
          id="genre-select"
          value={genre}
          label="Genre"
          onChange={(e: SelectChangeEvent<string | number | null>) => {
            setGenre(e.target.value);
          }}>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
