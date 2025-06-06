import InfiniteScroll from "react-infinite-scroll-component";
import { FixedSizeList } from "react-window";
import { Box, Divider, Typography } from "@mui/material";
import { useMovies } from "@api/MoviesList/useMovies";
import { SearchFilters } from "./SearchFilters";
import { List } from "./List";
import { Loading } from "../Loading";

export const MoviesList = () => {
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useMovies();

  const Row = ({ index, style }) => {
    const movie = data?.results[index];
    return (
      <div style={style}>
        <List data={[movie]} />
      </div>
    );
  };

  return (
    <Box sx={{ padding: "20px" }}>
      {isLoading && <Loading />}
      <SearchFilters />
      <Divider sx={{ padding: "10px" }} />
      <InfiniteScroll
        dataLength={data?.results?.length || 0}
        next={fetchNextPage}
        hasMore={Boolean(data && data?.page !== data?.totalPages)}
        loader={
          isFetchingNextPage && (
            <Typography sx={{ textAlign: "center", paddingTop: "20px" }}>
              Loading...
            </Typography>
          )
        }
      >
        {/* <List data={data?.results || []} /> */}
        <FixedSizeList
          height={800} // Adjust this value based on your needs
          width="100%"
          itemCount={data?.results?.length || 0}
          itemSize={200} // Adjust this value based on your item height
        >
          {Row}
        </FixedSizeList>
      </InfiniteScroll>
    </Box>
  );
};
