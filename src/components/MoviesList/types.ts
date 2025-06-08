import { Movie } from "@api/types";

export interface MovieGridProps {
  children?: React.ReactNode;
}

export interface MovieGridItemProps {
  children?: React.ReactNode;
}

export interface MovieCardProps {
  item: Movie;
}
