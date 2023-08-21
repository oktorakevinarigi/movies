import { ULR_IMAGE } from "@/constants";
import { CardReview } from "../card-review";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features / Movies / Card Review",
  component: CardReview,
} satisfies Meta<typeof CardReview>;

export default meta;
type CardReviewStory = StoryObj<typeof meta>;

export const Desktop: CardReviewStory = {
  render: args => (
    <div className="w-[768px]">
      <CardReview {...args} />
    </div>
  ),
  args: {
    isMobile: false,
    name: "CinemaSerf",
    date: "05 June 2023 05:50:00",
    ratings: 6,
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    urlImage: ULR_IMAGE + "/1kks3YnVkpyQxzw36CObFPvhL5f.jpg",
    loadMore: undefined,
    index: 0,
    onLoadMore: () => {},
  },
};
