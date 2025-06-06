import { request } from "../request";
import type { QueryArgs, MoviesApi } from "../types";

export const getMovies = ({ options, searchParams }: QueryArgs) =>
  request<MoviesApi>(
    {
      path: "movie/popular",
      searchParams,
    },
    {
      ...options,
      method: "GET",
    },
  );
