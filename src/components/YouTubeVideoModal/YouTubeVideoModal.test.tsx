import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { YouTubeVideoModal } from "./YouTubeVideoModal";
import { YOUTUBE_SRC_BASE } from "@constants/common";

describe("<YouTubeVideoModal />", () => {
  it("renders iframe when videoKey is provided", () => {
    render(
      <YouTubeVideoModal videoKey="abc123" name="Test" onClose={() => {}} />,
    );
    const iframe = screen.getByTitle("Test") as HTMLIFrameElement;
    expect(iframe).toBeInTheDocument();
    expect(iframe.src).toContain(`${YOUTUBE_SRC_BASE}abc123`);
  });

  it("does not render when videoKey is empty", () => {
    const { container } = render(
      <YouTubeVideoModal videoKey="" name="Test" onClose={() => {}} />,
    );
    expect(container.querySelector("iframe")).toBeNull();
  });
});
