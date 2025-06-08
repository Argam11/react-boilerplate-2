import { Grid } from "@mui/material";
import { MovieGridProps } from "./types";

export const MovieGrid = ({ children, ...props }: MovieGridProps) => {
  return (
    <Grid {...props} container spacing={2}>
      {children}
    </Grid>
  );
};
