import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box, Divider, SelectChangeEvent, Typography } from "@mui/material";
import { useMovies } from "@api/MoviesList/useMovies";
import { useDebounce } from "@hooks/useDebounce";
import { SearchFilters } from "./SearchFilters";
import { List } from "./List";
import { Loading } from "../Loading";

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
      {isLoading && <Loading />}
      <SearchFilters
        search={search}
        genre={genre}
        onChangeSearch={onChangeSearch}
        onChangeGenre={onChangeGenre}
      />
      <Divider sx={{ padding: "10px" }} />
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
            sx={{ textAlign: "center", padding: "20px", fontWeight: "bold" }}
          >
            🎬 You've seen all available movies!
          </Typography>
        }
      >
        <List data={data?.results || []} />
      </InfiniteScroll>
    </Box>
  );
};
