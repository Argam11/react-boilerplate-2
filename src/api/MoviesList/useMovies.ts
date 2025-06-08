import { useInfiniteQuery } from "@tanstack/react-query";
import { getMovies } from "./getMovies";
import { MOVIES_QUERY_KEY } from "./queryKeys";

interface UseMoviesParams {
  search?: string;
  genre?: number;
}

export const useMovies = ({ search, genre }: UseMoviesParams) => {
  return useInfiniteQuery({
    queryKey: [MOVIES_QUERY_KEY, search, genre],
    queryFn: ({ pageParam }) => {
      const searchParams = new URLSearchParams({
        page: String(pageParam || 1),
      });

      let path = "movie/popular";

      if (genre) {
        searchParams.set("with_genres", String(genre));
        path = "discover/movie";
      }

      if (search) {
        searchParams.set("query", search);
        path = "search/movie";
      }

      return getMovies({ path, searchParams });
    },
    initialPageParam: 1,
    getNextPageParam: (_lastPage, _pages, lastPageParam) => {
      return lastPageParam + 1;
    },
    select: (data) => {
      return {
        page: data?.pages[data?.pages.length - 1]?.page || 1,
        totalPages: data?.pages[data?.pages.length - 1]?.total_pages || 1,
        results: data?.pages.flatMap((res) => res?.results || []),
      };
    },
  });
};
