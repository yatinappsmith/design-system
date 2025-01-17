import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Avatar } from "./Avatar";

export default {
  title: "Design System/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

// eslint-disable-next-line react/function-component-definition
const Template: ComponentStory<typeof Avatar> = (args) => {
  return <Avatar {...args} />;
};

export const AvatarStory = Template.bind({});
AvatarStory.storyName = "Avatar";
AvatarStory.args = {
  image: "https://picsum.photos/200/300",
  label: "Avatar",
  isTooltipEnabled: true,
};
