import { Grid } from "@mui/material";

interface GridComponentsProps {
  children?: React.ReactNode;
}

interface ItemProps {
  children?: React.ReactNode;
}

export const List = ({ children, ...props }: GridComponentsProps) => {
  return (
    <Grid {...props} container spacing={2}>
      {children}
    </Grid>
  );
};

export const Item = ({ children, ...props }: ItemProps) => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} {...props}>
      {children}
    </Grid>
  );
};
