import { Box, Divider } from "@mui/material";

import { SearchFilters } from "./SearchFilters";
import { List } from "./List";
import { useEffect, useState } from "react";

const api_key = import.meta.env.VITE_MOVIE_API_KEY;

const data = [
  { id: "11" },
  { id: "22" },
  { id: "33" },
  { id: "44" },
  { id: "55" },
  { id: "44" },
  { id: "55" },
  { id: "44" },
  { id: "55" },
  { id: "44" },
  { id: "55" },
  { id: "44" },
  { id: "55" },
  { id: "44" },
  { id: "55" },
  { id: "44" },
  { id: "55" },
  // { id: 44 },
  // { id: 55 },
];

export const MoviesList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1`
        ).then((res) => res.json());

        setData(data.results);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <Box sx={{ padding: "20px" }}>
      <SearchFilters />
      <Divider sx={{ padding: "10px" }} />
      <List data={data} />
    </Box>
  );
};
