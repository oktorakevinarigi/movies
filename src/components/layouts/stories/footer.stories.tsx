import { Footer } from "../footer";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layout / Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type RecommendationStory = StoryObj<typeof meta>;

export const Desktop: RecommendationStory = {
  render: args => (
    <div className="w-[768px]">
      <Footer {...args} />
    </div>
  ),
  args: {
    isMobile: false,
  },
};

export const Mobile: RecommendationStory = {
  render: args => (
    <div className="w-[360px]">
      <Footer {...args} />
    </div>
  ),
  args: {
    isMobile: true,
  },
};
