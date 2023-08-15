import { CardTopRateSkeleton } from "../card-top-rate";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features / Movies / Card Top Rate Skeleton",
  component: CardTopRateSkeleton,
} satisfies Meta<typeof CardTopRateSkeleton>;

export default meta;
type CardBannerSkeletonStory = StoryObj<typeof meta>;

export const Default: CardBannerSkeletonStory = {
  render: args => (
    <div>
      <CardTopRateSkeleton {...args} />
    </div>
  ),
};
