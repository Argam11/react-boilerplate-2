import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 2,
};

export const Trailers = () => {
  return (
    <Slider {...settings}>
      <Box sx={{ padding: "10px", outline: "none" }}>
        <img
          src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
          width="100%"
        />
        <h3>Title 1</h3>
      </Box>
      <Box sx={{ padding: "10px", outline: "none" }}>
        <img
          src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
          width="100%"
        />
        <h3>Title 2</h3>
      </Box>
      <Box sx={{ padding: "10px", outline: "none" }}>
        <img
          src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
          width="100%"
        />
        <h3>Title 3</h3>
      </Box>
      <Box sx={{ padding: "10px", outline: "none" }}>
        <img
          src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg"
          width="100%"
        />
        <h3>Title 4</h3>
      </Box>
    </Slider>
  );
};
