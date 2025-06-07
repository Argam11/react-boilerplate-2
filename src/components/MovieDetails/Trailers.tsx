import { useState } from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Trailers.css";
import { TrailerPlayer } from "./TrailerPlayer";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  draggable: false,
  className: "slick-slider",
};

interface Trailer {
  key: string;
  name: string;
  site: string;
  type: string;
}

interface TrailersProps {
  data?: Trailer[];
}

export const Trailers = ({ data }: TrailersProps) => {
  const [activeTrailer, setActiveTrailer] = useState<Trailer | null>(null);

  const handleOpen = (trailer: Trailer) => {
    setActiveTrailer(trailer);
  };

  const handleClose = () => {
    setActiveTrailer(null);
  };

  if (!data || data.length === 0) return null;

  return (
    <>
      {data.length === 1 ? (
        <Box
          sx={{ paddingBlock: "10px", outline: "none", cursor: "pointer" }}
          onClick={() => handleOpen(data[0])}
        >
          <img
            src={`https://img.youtube.com/vi/${data[0].key}/maxresdefault.jpg`}
            width="100%"
          />
          <h3>{data[0].name}</h3>
        </Box>
      ) : (
        <Slider {...settings}>
          {data?.map((trailer) => {
            return (
              <Box
                sx={{ padding: "10px", outline: "none" }}
                key={trailer.key}
                onClick={() => {
                  handleOpen(trailer);
                }}
              >
                <img
                  src={`https://img.youtube.com/vi/${trailer.key}/maxresdefault.jpg`}
                  width="100%"
                  alt={trailer.name}
                  loading="lazy"
                  style={{ cursor: "pointer" }}
                />
                <h3>{trailer.name}</h3>
              </Box>
            );
          })}
        </Slider>
      )}
      {activeTrailer && (
        <TrailerPlayer
          videoKey={activeTrailer?.key}
          name={activeTrailer?.name}
          onClose={handleClose}
        />
      )}
    </>
  );
};
