import { BannerMovie } from "../banner";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features / Movies / Banner",
  component: BannerMovie,
} satisfies Meta<typeof BannerMovie>;

export default meta;
type BannerMovieStory = StoryObj<typeof meta>;

export const Desktop: BannerMovieStory = {
  render: args => (
    <div className="w-[900px]">
      <BannerMovie {...args} />
    </div>
  ),
};
