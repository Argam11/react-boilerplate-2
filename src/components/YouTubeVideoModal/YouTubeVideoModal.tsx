import { Box, Modal } from "@mui/material";
import { YOUTUBE_SRC_BASE } from "@constants/common";
import { YouTubeVideoModalProps } from "./types";

export const YouTubeVideoModal = ({
  videoKey,
  name,
  onClose,
}: YouTubeVideoModalProps) => (
  <Modal
    open={!!videoKey}
    onClose={onClose}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}
  >
    <Box sx={{ outline: "none", width: "80%", height: "80%" }}>
      <iframe
        width="100%"
        height="100%"
        src={`${YOUTUBE_SRC_BASE}${videoKey}`}
        title={name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  </Modal>
);
