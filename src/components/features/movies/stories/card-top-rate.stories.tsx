import { ULR_IMAGE } from "@/constants";
import { CardTopRate } from "../card-top-rate";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features / Movies / Card Top Rate",
  component: CardTopRate,
} satisfies Meta<typeof CardTopRate>;

export default meta;
type CardBannerStory = StoryObj<typeof meta>;

export const Desktop: CardBannerStory = {
  render: args => (
    <div>
      <CardTopRate {...args} />
    </div>
  ),
  args: {
    genres: "Action",
    id: "238",
    title: "The Godfather",
    urlImage: ULR_IMAGE + "rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
  },
};
