import { useQuery } from "@tanstack/react-query";
import { getGenres } from "./getGenres";
import { GENRES_QUERY_KEY } from "./queryKeys";

export const useGenres = () => {
  return useQuery({
    queryKey: [GENRES_QUERY_KEY],
    queryFn: () => getGenres({ path: "genre/movie/list" }),
  });
};
