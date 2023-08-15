import { BannerMovie } from "../banner";
import { getPopularFake, getGenresFake, getVideosFake } from "../msw-handlers/popular-record";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features / Movies / Banner",
  component: BannerMovie,
  parameters: {
    msw: {
      handlers: [getPopularFake, getGenresFake, getVideosFake],
    },
    jest: ["banner.test.tsx"],
  },
} satisfies Meta<typeof BannerMovie>;

export default meta;
type BannerMovieStory = StoryObj<typeof meta>;

export const Desktop: BannerMovieStory = {
  render: args => (
    <div className="w-[900px]">
      <BannerMovie {...args} />
    </div>
  ),
  args: {
    isMobile: false,
  },
};

export const Mobile: BannerMovieStory = {
  render: args => (
    <div className="w-[450px]">
      <BannerMovie {...args} />
    </div>
  ),
  args: {
    isMobile: true,
  },
};
