import { request } from "../request";
import type { QueryArgs, GenresApi } from "../types";

export const getGenres = ({ path, options }: QueryArgs) =>
  request<GenresApi>(
    {
      path,
    },
    {
      ...options,
      method: "GET",
    },
  );
