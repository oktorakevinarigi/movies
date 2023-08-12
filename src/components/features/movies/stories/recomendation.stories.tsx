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
    <div className="w-[800px]">
      <Recommendation {...args} />
    </div>
  ),
  args: {
    id: "614479",
  },
};
