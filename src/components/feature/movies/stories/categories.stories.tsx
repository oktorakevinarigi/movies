import { CategoriesMovie } from "../categories";
import { getCategories } from "../msw-handlers";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features / Movies / Categories",
  component: CategoriesMovie,
  parameters: {
    msw: {
      handlers: [getCategories],
    },
  },
} satisfies Meta<typeof CategoriesMovie>;

export default meta;
type CategoriesStory = StoryObj<typeof meta>;

export const Desktop: CategoriesStory = {
  render: args => (
    <div>
      <CategoriesMovie {...args} />
    </div>
  ),
};
