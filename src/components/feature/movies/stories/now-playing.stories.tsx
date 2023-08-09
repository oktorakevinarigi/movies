import { NowPlaying } from "../now-playing";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features / Movies / Now Playing",
  component: NowPlaying,
} satisfies Meta<typeof NowPlaying>;

export default meta;
type NowPlayingStory = StoryObj<typeof meta>;

export const Desktop: NowPlayingStory = {
  render: args => (
    <div className="w-[900px]">
      <NowPlaying {...args} />
    </div>
  ),
};
