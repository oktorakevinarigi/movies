import { Navbar } from "../navbar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layout / Navbar",
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type NavbarStory = StoryObj<typeof meta>;

export const Mobile: NavbarStory = {
  render: args => (
    <div className="h-20 w-[360px] translate-y-0">
      <Navbar {...args} />
    </div>
  ),
  args: {
    isMobile: true,
  },
};
