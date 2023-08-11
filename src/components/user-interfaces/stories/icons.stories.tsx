import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import * as icons from "../icons";

const iconList = { ...icons };

export default {
  title: "UI / Icons",
  component: icons.BellIcon,
} as Meta;

type ButtonStory = StoryObj<unknown>;

export const Basic: ButtonStory = {
  render: () => (
    <div className="flex flex-wrap gap-5">
      {Object.entries(iconList).map(([name, Icon]) => {
        return (
          <div
            key={name}
            className="flex h-[100px] w-[200px] flex-col items-center justify-center gap-2 rounded-md border"
          >
            <Icon width="40px" height="40px" />
            <p className="text-center text-xs font-semibold">{name}</p>
          </div>
        );
      })}
    </div>
  ),
};
