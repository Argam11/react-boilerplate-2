import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Image } from "./Image";

describe("<Image />", () => {
  it("renders with valid src and title", () => {
    render(<Image src="https://example.com/test.jpg" title="Test Image" />);
    const img = screen.getByAltText("Test Image") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toBe("https://example.com/test.jpg");
  });

  it("renders fallback placeholder on error", () => {
    render(<Image src="broken.jpg" title="Broken" />);
    const img = screen.getByAltText("Broken") as HTMLImageElement;

    fireEvent.error(img);

    expect(img.src).toContain("/assets/image-placeholder.jpg");
  });

  it("applies custom styles from props", () => {
    render(
      <Image
        src="https://example.com/test.jpg"
        title="Styled"
        style={{ borderRadius: "10px" }}
      />,
    );
    const img = screen.getByAltText("Styled");
    expect(img).toHaveStyle({ borderRadius: "10px" });
  });

  it("uses default alt text when title is not provided", () => {
    render(<Image src="https://example.com/test.jpg" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("alt", "Image");
  });

  it("supports spreading additional props (e.g., data-testid)", () => {
    render(
      <Image src="https://example.com/test.jpg" data-testid="custom-img" />,
    );
    const img = screen.getByTestId("custom-img");
    expect(img).toBeInTheDocument();
  });

  it("uses placeholder if src is undefined", () => {
    render(<Image title="No Src" />);
    const img = screen.getByAltText("No Src") as HTMLImageElement;
    expect(img.src).toContain("/assets/image-placeholder.jpg");
  });
});
