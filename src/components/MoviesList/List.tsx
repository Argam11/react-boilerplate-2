import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
  Grid,
} from '@mui/material';

interface ListProps {
  data: { id: number }[];
}

export const List = ({ data }: ListProps) => {
  return (
    <Grid container spacing={2} sx={{ marginTop: '20px' }}>
      {data.map((item) => {
        return (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card>
              <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
