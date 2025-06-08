import { BrowserRouter, Routes, Route } from "react-router";
import { MoviesList } from "@components/MoviesList";
import { MovieDetails } from "@components/MovieDetails";
import { PageNotFound } from "@components/PageNotFound";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/:id" element={<MovieDetails />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
