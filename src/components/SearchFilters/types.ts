import { SelectChangeEvent } from "@mui/material";

export interface SearchFiltersProps {
  search?: string;
  genre?: number;
  onChangeSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeGenre?: (event: SelectChangeEvent<number>) => void;
}
