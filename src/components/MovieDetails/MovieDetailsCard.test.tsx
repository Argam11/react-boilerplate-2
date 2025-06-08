import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MovieDetailsCard } from "./MovieDetailsCard";
import type { MovieDetailsApi, Cast } from "@api/types";

const mockData: MovieDetailsApi = {
  id: 111,
  title: "Inception",
  poster_path: "/poster_path.img",
  overview: "A mind-bending thriller.",
  release_date: "2010-07-16",
  runtime: 148,
  vote_average: 8,
  genres: [
    { id: 1, name: "Sci-Fi" },
    { id: 2, name: "Thriller" },
  ],
} as const;

const mockCasts: Cast[] = [
  { id: 1, name: "Leonardo DiCaprio", profile_path: "leo.jpg" },
  { id: 2, name: "Joseph Gordon-Levitt", profile_path: "joseph.jpg" },
] as const;

describe("<MovieDetailsCard />", () => {
  it("renders movie details and cast", () => {
    render(<MovieDetailsCard data={mockData} casts={mockCasts} />);

    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(screen.getByText("A mind-bending thriller.")).toBeInTheDocument();
    expect(screen.getByText("Release date: 2010-07-16")).toBeInTheDocument();
    expect(screen.getByText("2h 28m")).toBeInTheDocument();
    expect(screen.getByText("Sci-Fi, Thriller")).toBeInTheDocument();

    expect(screen.getByText("Leonardo DiCaprio")).toBeInTheDocument();
    expect(screen.getByText("Joseph Gordon-Levitt")).toBeInTheDocument();
  });
});
