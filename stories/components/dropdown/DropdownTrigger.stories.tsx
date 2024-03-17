import type { Meta, StoryObj } from "@storybook/react";

import { DropdownTrigger } from "@/components/dropdown/DropdownTrigger";
import { IconNetworkBase } from "../../../lib";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Drop Down/DropdownTrigger",
  component: DropdownTrigger,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["small", "large"],
    },
    selectedOption: { control: "text", defaultValue: "Base" },
    expanded: { control: "boolean", defaultValue: false },
    // onClick: { action: "clicked" },
    // disabled: { control: "boolean" },
  },
} satisfies Meta<typeof DropdownTrigger>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    title: "Network",
    expanded: false,
    variant: "small",
    selectedOption: "Base",
    icon: <IconNetworkBase />,
  },
};
