import { useInfiniteQuery } from "@tanstack/react-query";
import { MOVIES_QUERY_KEY } from "./queryKeys";
import { getMovies } from "./getMovies";

export const useMovies = () => {
  return useInfiniteQuery({
    queryKey: [MOVIES_QUERY_KEY],
    queryFn: ({ pageParam }) => {
      const searchParams = new URLSearchParams({
        page: String(pageParam || 1),
      });

      return getMovies({ searchParams });
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
