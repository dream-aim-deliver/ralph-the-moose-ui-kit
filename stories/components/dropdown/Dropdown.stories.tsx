import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "@/components/dropdown";
import { IconElk, IconNetworkBase } from "../../../lib";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["small", "large"],
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    variant: "small",
    title: "Destination chain",
    items: [
      {
        title: "Base",
        icon: <IconNetworkBase />,
      },
      {
        title: "Ethereum",
        icon: <IconElk size={16} />,
      },
    ],
    defaultItem: {
      title: "Base",
      icon: <IconNetworkBase />,
    },
    isPrimaryAction: true,
  },
};
