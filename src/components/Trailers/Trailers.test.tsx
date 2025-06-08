import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Trailers } from "./Trailers";
import { Trailer } from "./types";

const trailersMock: Trailer[] = [
  { key: "abc123", name: "Trailer 1", site: "YouTube", type: "Trailer" },
  { key: "def456", name: "Trailer 2", site: "YouTube", type: "Trailer" },
];

describe("<Trailers />", () => {
  it("renders single trailer and opens modal on click", () => {
    render(<Trailers data={[trailersMock[0]]} />);
    fireEvent.click(screen.getByText("Trailer 1"));
    expect(screen.getByTitle("Trailer 1")).toBeInTheDocument();
  });

  it("renders multiple trailers and opens correct one", () => {
    render(<Trailers data={trailersMock} />);
    fireEvent.click(screen.getAllByText("Trailer 2")[0]); // fix
    expect(screen.getByTitle("Trailer 2")).toBeInTheDocument();
  });

  it("opens modal and renders the YouTube iframe", () => {
    render(<Trailers data={[trailersMock[0]]} />);
    fireEvent.click(screen.getByText("Trailer 1"));

    const iframe = screen.getByTitle("Trailer 1") as HTMLIFrameElement;

    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute(
      "src",
      "https://www.youtube.com/embed/abc123",
    );
    expect(iframe).toHaveAttribute(
      "allow",
      expect.stringContaining("autoplay"),
    );
    expect(iframe).toHaveAttribute("allowfullscreen", "");
  });
});
