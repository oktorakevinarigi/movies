import { BannerDetail } from "../banner-detail";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Features / Movies / Banner Detail",
  component: BannerDetail,
} satisfies Meta<typeof BannerDetail>;

export default meta;
type BannerDetailStory = StoryObj<typeof meta>;

export const Desktop: BannerDetailStory = {
  render: args => (
    <div>
      <BannerDetail {...args} />
    </div>
  ),
  args: {
    isMobile: false,
    id: "569094",
  },
};

export const Mobile: BannerDetailStory = {
  render: args => (
    <div className="w-[360px]">
      <BannerDetail {...args} />
    </div>
  ),
  args: {
    ...Desktop.args,
    isMobile: true,
  },
};
