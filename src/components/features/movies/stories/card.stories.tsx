import { ULR_IMAGE } from "@/constants";
import { Card } from "../card";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features / Movies / Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type CardMoviesStory = StoryObj<typeof meta>;

export const Desktop: CardMoviesStory = {
  render: args => (
    <div className="w-[250px]">
      <Card {...args} />
    </div>
  ),
  args: {
    isMobile: false,
    genre: "Action",
    id: 238,
    ratings: 8.7,
    title: "The Godfather",
    urlImage: ULR_IMAGE + "rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
    year: "1972",
  },
};

export const Mobile: CardMoviesStory = {
  render: args => (
    <div className="w-[155px]">
      <Card {...args} />
    </div>
  ),
  args: {
    ...Desktop.args,
    isMobile: true,
  },
};
