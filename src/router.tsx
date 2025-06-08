import { Routes, Route } from "react-router";
import { MoviesList } from "@components/MoviesList";
import { MovieDetails } from "@components/MovieDetails";
import { Favorites } from "@components/Favorites";
import { PageNotFound } from "@components/PageNotFound";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesList />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/page-not-found" element={<PageNotFound />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
