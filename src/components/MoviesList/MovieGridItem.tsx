import { Grid } from "@mui/material";
import { MovieGridItemProps } from "./types";

export const MovieGridItem = ({ children, ...props }: MovieGridItemProps) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} {...props}>
      {children}
    </Grid>
  );
};
