import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";

const mockedNavigate = vi.fn();
vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useNavigate: () => mockedNavigate,
  };
});

import { MovieCard } from "./MovieCard";

const mockMovie = {
  id: 1,
  title: "Interstellar",
  poster_path: "/poster.jpg",
  overview: "A team of explorers travel through a wormhole in space.",
  release_date: "2014-11-07",
  vote_average: 8.6,
} as const;

describe("<MovieCard />", () => {
  it("renders movie info", () => {
    render(<MovieCard item={mockMovie} />, { wrapper: MemoryRouter });

    expect(screen.getByText("Interstellar")).toBeInTheDocument();
    expect(screen.getByText("2014-11-07")).toBeInTheDocument();
    expect(screen.getByText("8.6")).toBeInTheDocument();
  });

  it("navigates to movie page on click", () => {
    render(<MovieCard item={mockMovie} />, { wrapper: MemoryRouter });

    fireEvent.click(screen.getByRole("button"));
    expect(mockedNavigate).toHaveBeenCalledWith("/movie/1");
  });
});
