import { CardSkeleton } from "../card";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features / Movies / Card Skeleton",
  component: CardSkeleton,
} satisfies Meta<typeof CardSkeleton>;

export default meta;
type CardSkeletonStory = StoryObj<typeof meta>;

export const Desktop: CardSkeletonStory = {
  render: () => (
    <div className="w-[250px]">
      <CardSkeleton />
    </div>
  ),
};
