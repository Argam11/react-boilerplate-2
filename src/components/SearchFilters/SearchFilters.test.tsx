import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchFilters } from "./SearchFilters";

// mock useGenres
vi.mock("@api/GenresList/useGenres", () => ({
  useGenres: () => ({
    data: {
      genres: [
        { id: 1, name: "Action" },
        { id: 2, name: "Comedy" },
      ],
    },
  }),
}));

describe("<SearchFilters />", () => {
  it("renders inputs and genres, triggers search and genre change", () => {
    const onSearch = vi.fn();
    const onGenre = vi.fn();

    render(
      <SearchFilters
        search="test"
        genre={1}
        onChangeSearch={onSearch}
        onChangeGenre={onGenre}
      />,
    );

    // type into search
    fireEvent.change(screen.getByLabelText("Search"), {
      target: { value: "New" },
    });
    expect(onSearch).toHaveBeenCalled();

    // open and select genre
    fireEvent.mouseDown(screen.getByLabelText("Genre")); // open select
    fireEvent.click(screen.getByText("Comedy"));
    expect(onGenre).toHaveBeenCalled();
  });
});
