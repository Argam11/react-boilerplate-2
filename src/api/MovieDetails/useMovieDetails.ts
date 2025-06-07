import { useQuery } from "@tanstack/react-query";
import {
  getMovieDetails,
  getMovieCredits,
  getMovieTrailers,
} from "./getMovieDetails";
import {
  MOVIE_DETAILS_QUERY_KEY,
  MOVIE_CREDITS_QUERY_KEY,
  MOVIE_TRAILERS_QUERY_KEY,
} from "./queryKeys";

export const useMovieDetails = (id: string) => {
  return useQuery({
    queryKey: [MOVIE_DETAILS_QUERY_KEY, id],
    queryFn: () => {
      return getMovieDetails({ path: `movie/${id}` });
    },
  });
};

export const useMovieCredits = (id: string) => {
  return useQuery({
    queryKey: [MOVIE_CREDITS_QUERY_KEY, id],
    queryFn: () => {
      return getMovieCredits({ path: `movie/${id}/credits` });
    },
  });
};

export const useMovieTrailers = (id: string) => {
  return useQuery({
    queryKey: [MOVIE_TRAILERS_QUERY_KEY, id],
    queryFn: () => {
      return getMovieTrailers({ path: `movie/${id}/videos` });
    },
  });
};
