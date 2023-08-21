// import { render, screen } from "@testing-library/react";
import ResizeObserver from "resize-observer-polyfill";
// import event from "@testing-library/user-event";
// import { BannerMovie } from "../banner";
import {
  generateGenreFake,
  generatePopularFake,
  generateVideosFake,
} from "../msw-handlers/popular-record";

global.ResizeObserver = ResizeObserver;

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
jest.mock("next/image", () => ({
  __esModule: true,
  default: (
    props: JSX.IntrinsicAttributes &
      React.ClassAttributes<HTMLImageElement> &
      React.ImgHTMLAttributes<HTMLImageElement>,
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
  ) => <img {...props} />,
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
  it("testing", async () => {});
  // it("should render 6 button, year, and image", async () => {
  //   render(<BannerMovie isMobile={false} />);
  //   // Button
  //   const buttonElement = await screen.findAllByRole("button");
  //   expect(buttonElement.length).toBe(6);
  //   // Image
  //   const imageElement = await screen.findAllByRole("img");
  //   expect(imageElement.length).toBe(6);
  //   // Year
  //   const paragraphElement = await screen.findAllByText(/\b(19|20)\d{2}\b/);
  //   expect(paragraphElement.length).toBe(6);
  // });
  // it("should render Modal", async () => {
  //   await event.setup();
  //   render(<BannerMovie isMobile={false} />);
  //   const buttonElement = screen.getAllByRole("button");
  //   await event.click(buttonElement[0]);
  //   const buttonPlayYoutube = await screen.findByLabelText("Watch Youtube Video");
  //   expect(buttonPlayYoutube).toBeInTheDocument();
  // });
});
