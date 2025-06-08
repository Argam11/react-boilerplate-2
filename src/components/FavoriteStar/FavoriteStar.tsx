import { IconButton, Tooltip } from "@mui/material";
import { Star, StarBorder } from "@mui/icons-material";
import { FavoriteStarProps } from "./types";

export const FavoriteStar = ({
  isFavorite,
  onToggle,
  tooltipTitle,
}: FavoriteStarProps) => {
  return (
    <Tooltip
      title={
        tooltipTitle ||
        (isFavorite ? "Remove from favorites" : "Add to favorites")
      }
    >
      <IconButton onClick={onToggle} size="small">
        {isFavorite ? <Star color="warning" /> : <StarBorder />}
      </IconButton>
    </Tooltip>
  );
};
