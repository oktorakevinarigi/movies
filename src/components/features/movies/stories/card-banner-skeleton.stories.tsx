import { CardBannerSkeleton } from "../card-banner";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features / Movies / Card Banner Skeleton",
  component: CardBannerSkeleton,
} satisfies Meta<typeof CardBannerSkeleton>;

export default meta;
type CardBannerSkeletonStory = StoryObj<typeof meta>;

export const Desktop: CardBannerSkeletonStory = {
  render: args => (
    <div>
      <CardBannerSkeleton {...args} />
    </div>
  ),
  args: {
    isMobile: false,
  },
};

export const Mobile: CardBannerSkeletonStory = {
  render: args => (
    <div className="w-[360px]">
      <CardBannerSkeleton {...args} />
    </div>
  ),
  args: {
    isMobile: true,
  },
};
