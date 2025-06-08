import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { VirtuosoGrid } from "react-virtuoso";
import { Box, SelectChangeEvent, Typography } from "@mui/material";
import { useMovies } from "@api/MoviesList/useMovies";
import { useDebounce } from "@hooks/useDebounce";
import { SearchFilters } from "@components/SearchFilters";
import { MovieGridItem } from "./MovieGridItem";
import { Loading } from "@components/Loading";
import { MovieCard } from "./MovieCard";
import { MovieGrid } from "./MovieGrid";

const gridComponents = {
  List: MovieGrid,
  Item: MovieGridItem,
} as const;

export const MoviesList = () => {
  const [search, setSearch] = useState<string>("");
  const [genre, setGenre] = useState<number>(0);

  const debouncedSearch = useDebounce(search, 300);

  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useMovies({
    search: debouncedSearch,
    genre,
  });

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onChangeGenre = (event: SelectChangeEvent<number>) => {
    setGenre(event.target.value);
  };

  return (
    <Box sx={{ padding: "20px" }}>
      <SearchFilters
        search={search}
        genre={genre}
        onChangeSearch={onChangeSearch}
        onChangeGenre={onChangeGenre}
      />
      <Box marginTop={4}>
        {isLoading ? (
          <Loading mode="inline" />
        ) : (
          <InfiniteScroll
            dataLength={data?.results?.length || 0}
            next={fetchNextPage}
            hasMore={Boolean(data && data?.page !== data?.totalPages)}
            loader={
              isFetchingNextPage && (
                <Typography sx={{ textAlign: "center", paddingTop: "20px" }}>
                  Loading more movies...
                </Typography>
              )
            }
            endMessage={
              <Typography
                sx={{
                  textAlign: "center",
                  padding: "20px",
                  fontWeight: "bold",
                }}
              >
                {data?.results?.length
                  ? "🎬 You've seen all available movies!"
                  : "🔍 No movies found!"}
              </Typography>
            }
          >
            <VirtuosoGrid
              useWindowScroll
              totalCount={data?.results?.length || 0}
              components={gridComponents}
              data={data?.results || []}
              itemContent={(_index, data) => {
                return <MovieCard item={data} />;
              }}
            />
          </InfiniteScroll>
        )}
      </Box>
    </Box>
  );
};
