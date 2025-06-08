import { useState } from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Trailers.css";
import { YouTubeVideoModal } from "@components/YouTubeVideoModal";
import { Image } from "@components/Image";
import { Trailer, TrailersProps } from "./types";
import { SLICK_SLIDER_SETTINGS } from "./constants";
import { YOUTUBE_THUMBNAIL_BASE_URL } from "@constants/common";

export const Trailers = ({ data }: TrailersProps) => {
  const [activeTrailer, setActiveTrailer] = useState<Trailer | null>(null);

  const handleOpen = (trailer: Trailer) => {
    setActiveTrailer(trailer);
  };

  const handleClose = () => {
    setActiveTrailer(null);
  };

  return (
    <Box
      sx={{
        marginTop: "20px",
        "& .slick-prev::before, & .slick-next::before": {
          color: (theme) => theme.palette.text.primary,
        },
      }}
    >
      <Typography variant="h4">Trailers</Typography>
      {data.length === 1 ? (
        <Box
          sx={{ paddingBlock: "10px", outline: "none", cursor: "pointer" }}
          onClick={() => handleOpen(data[0])}
        >
          <Image
            src={`${YOUTUBE_THUMBNAIL_BASE_URL}${data[0].key}/maxresdefault.jpg`}
            style={{ minHeight: "auto" }}
          />
          <Typography variant="h3">{data[0].name}</Typography>
        </Box>
      ) : (
        <Slider {...SLICK_SLIDER_SETTINGS}>
          {data?.map((trailer) => {
            return (
              <Box
                sx={{ padding: "10px", outline: "none" }}
                key={trailer.key}
                onClick={() => {
                  handleOpen(trailer);
                }}
              >
                <Image
                  src={`${YOUTUBE_THUMBNAIL_BASE_URL}${trailer.key}/maxresdefault.jpg`}
                  title={trailer.name}
                  style={{ cursor: "pointer" }}
                />
                <Typography variant="h3">{trailer.name}</Typography>
              </Box>
            );
          })}
        </Slider>
      )}
      {activeTrailer && (
        <YouTubeVideoModal
          videoKey={activeTrailer?.key}
          name={activeTrailer?.name}
          onClose={handleClose}
        />
      )}
    </Box>
  );
};
