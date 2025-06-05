import { BrowserRouter, Routes, Route } from "react-router";
import { MoviesList } from "@components/MoviesList";
import { MovieDetails } from "@components/MovieDetails";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesList />} />
        <Route path="/:id" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
