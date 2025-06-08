import { MovieDetailsApi, Cast } from "@api/types";

export interface MovieDetailsCardProps {
  data: MovieDetailsApi;
  casts: Cast[];
}
