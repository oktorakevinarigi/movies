import { Sidebar } from "../sidebar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layout / Sidebar",
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type SidebarStory = StoryObj<typeof meta>;

export const Default: SidebarStory = {
  render: args => (
    <div>
      <Sidebar {...args} />
    </div>
  ),
};
