import { Box, Typography, IconButton, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';
import Slider from 'react-slick';

interface MovieDetailsProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const MovieDetails = ({
  title = 'Movie Title',
  description = 'Movie description goes here',
  backgroundImage = 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60',
}: MovieDetailsProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Box sx={{ position: 'relative', height: 'calc(100vh - 400px)' }}>
        <IconButton
          onClick={handleBack}
          sx={{
            color: 'white',
            marginBottom: 2,
            position: 'fixed',
            left: '30px',
            top: '80px',
            zIndex: 9999,
          }}>
          <ArrowBackIcon />
        </IconButton>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            padding: 3,
            color: 'white',
            left: '100px',
            bottom: '100px',
          }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              marginBottom: 2,
              fontWeight: 'bold',
            }}>
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '600px',
            }}>
            {description}
          </Typography>
          <Button sx={{ marginTop: '20px' }} variant="contained">
            Watch trailer
          </Button>
        </Box>
      </Box>
      <Box>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </Box>
    </>
  );
};
