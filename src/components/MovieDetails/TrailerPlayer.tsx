import { Box, Modal } from "@mui/material";

interface TrailerPlayerProps {
  videoKey: string;
  name: string;
  onClose: () => void;
}

export const TrailerPlayer = ({
  videoKey,
  name,
  onClose,
}: TrailerPlayerProps) => (
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
        src={`https://www.youtube.com/embed/${videoKey}`}
        title={name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Box>
  </Modal>
);
