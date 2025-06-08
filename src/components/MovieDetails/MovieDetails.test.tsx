const mockedNavigate = vi.fn();

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
    useParams: () => ({ id: "123" }),
  };
});

vi.mock("@api/MovieDetails/useMovieDetails", () => ({
  useMovieDetails: () => ({
    data: {
      id: 123,
      title: "Inception",
      poster_path: "/poster.jpg",
      overview: "A mind-bending thriller.",
      release_date: "2010-07-16",
      runtime: 148,
      genres: [{ id: 1, name: "Sci-Fi" }],
    },
    isLoading: false,
    error: null,
  }),
  useMovieCredits: () => ({
    data: {
      cast: [{ id: 1, name: "Leonardo DiCaprio", profile_path: "leo.jpg" }],
    },
  }),
  useMovieTrailers: () => ({
    data: {
      results: [{ key: "abc123", site: "YouTube", type: "Trailer" }],
    },
  }),
}));

vi.mock("@hooks/useRedirectToNotFound", () => ({
  useRedirectToNotFound: () => {},
}));

import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { MovieDetails } from "./MovieDetails";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("<MovieDetails />", () => {
  it("renders movie details and trailers", () => {
    render(<MovieDetails />, { wrapper: MemoryRouter });

    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(screen.getByText("A mind-bending thriller.")).toBeInTheDocument();
    expect(screen.getByText("Leonardo DiCaprio")).toBeInTheDocument();
    expect(screen.getByText("Trailers")).toBeInTheDocument();
  });

  it("renders back button and triggers navigation", () => {
    render(<MovieDetails />, { wrapper: MemoryRouter });

    fireEvent.click(screen.getByTestId("movie-details-back-button"));
    expect(mockedNavigate).toHaveBeenCalledWith(-1);
  });
});
