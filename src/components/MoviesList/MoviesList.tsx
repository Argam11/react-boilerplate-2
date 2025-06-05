import { Box, Divider } from '@mui/material';

import { SearchFilters } from './SearchFilters';
import { List } from './List';

const data = [
  { id: '11' },
  { id: '22' },
  { id: '33' },
  { id: '44' },
  { id: '55' },
  { id: '44' },
  { id: '55' },
  { id: '44' },
  { id: '55' },
  { id: '44' },
  { id: '55' },
  { id: '44' },
  { id: '55' },
  { id: '44' },
  { id: '55' },
  { id: '44' },
  { id: '55' },
  // { id: 44 },
  // { id: 55 },
];

export const MoviesList = () => {
  return (
    <Box sx={{ padding: '20px' }}>
      <SearchFilters />
      <Divider sx={{ padding: '10px' }} />
      <List data={data} />
    </Box>
  );
};
