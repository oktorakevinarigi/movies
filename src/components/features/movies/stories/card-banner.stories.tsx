import { ULR_IMAGE } from "@/constants";
import { CardBanner } from "../card-banner";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features / Movies / Card Banner",
  component: CardBanner,
} satisfies Meta<typeof CardBanner>;

export default meta;
type CardBannerStory = StoryObj<typeof meta>;

export const Desktop: CardBannerStory = {
  render: args => (
    <div>
      <CardBanner {...args} />
    </div>
  ),
  args: {
    date: "2022",
    genres: "Action",
    id: "238",
    overview:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, accusamus a sint ipsa quas laboriosam, maxime velit inventore amet, similique in. Id repudiandae animi nam voluptatem nesciunt excepturi necessitatibus sapiente?",
    title: "The Godfather",
    urlImage: ULR_IMAGE + "rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
    onDetail: () => {},
    onWatch: () => {},
  },
};
