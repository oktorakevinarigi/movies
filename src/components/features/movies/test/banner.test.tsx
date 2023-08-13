import { render, screen } from "@testing-library/react";
import ResizeObserver from "resize-observer-polyfill";
import event from "@testing-library/user-event";
import { BannerMovie } from "../banner";
import {
  generateGenreFake,
  generatePopularFake,
  generateVideosFake,
} from "../msw-handlers/popular-record";

global.ResizeObserver = ResizeObserver;

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
jest.mock("../movie-queries", () => ({
  useGetMoviePopular: jest.fn().mockImplementation(() => ({
    data: generatePopularFake(),
  })),
  useGetMovieGenres: jest.fn().mockImplementation(() => ({
    data: generateGenreFake(),
  })),
  useGetMovieVideos: jest.fn().mockImplementation(() => ({
    data: generateVideosFake(),
  })),
}));
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("Banner", () => {
  it("should render 6 button, year, and image", async () => {
    render(<BannerMovie />);
    // Button
    const buttonElement = screen.getAllByRole("button");
    expect(buttonElement.length).toBe(6);

    // Image
    const imageElement = screen.getAllByRole("img");
    expect(imageElement.length).toBe(6);

    // Year
    const paragraphElement = screen.getAllByText(/\b(19|20)\d{2}\b/);
    expect(paragraphElement.length).toBe(6);
  });
  it("should render Modal", async () => {
    event.setup();
    render(<BannerMovie />);
    const buttonElement = screen.getAllByRole("button");
    event.click(buttonElement[0]);
    const buttonPlayYoutube = await screen.findByLabelText("Watch Youtube Video");
    expect(buttonPlayYoutube).toBeInTheDocument();
  });
});