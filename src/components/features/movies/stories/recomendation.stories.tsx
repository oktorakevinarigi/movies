import { Recommendation } from "../recommendation";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features / Movies / Recomendation",
  component: Recommendation,
} satisfies Meta<typeof Recommendation>;

export default meta;
type RecommendationStory = StoryObj<typeof meta>;

export const Desktop: RecommendationStory = {
  render: args => (
    <div className="w-[768px]">
      <Recommendation {...args} />
    </div>
  ),
  args: {
    isMobile: false,
    id: "614479",
  },
};

export const Mobile: RecommendationStory = {
  render: args => (
    <div className="w-[360px]">
      <Recommendation {...args} />
    </div>
  ),
  args: {
    ...Desktop.args,
    isMobile: true,
  },
};
