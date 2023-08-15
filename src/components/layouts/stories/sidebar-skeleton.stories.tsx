import { SidebarSkeleton } from "../sidebar";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layout / Sidebar Skeleton",
  component: SidebarSkeleton,
} satisfies Meta<typeof SidebarSkeleton>;

export default meta;
type SidebarStory = StoryObj<typeof meta>;

export const Default: SidebarStory = {
  render: args => (
    <div>
      <SidebarSkeleton {...args} />
    </div>
  ),
};
