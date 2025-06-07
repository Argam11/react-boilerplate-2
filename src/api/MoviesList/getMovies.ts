import { request } from "../request";
import type { QueryArgs, MoviesApi } from "../types";

export const getMovies = ({ path, options, searchParams }: QueryArgs) =>
  request<MoviesApi>(
    {
      path,
      searchParams,
    },
    {
      ...options,
      method: "GET",
    },
  );
