import type { Meta, StoryObj } from "@storybook/react";

import { DropdownContent } from "@/components/dropdown";
// import { IconNetworkBase } from "../../../lib";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Dropdown/DropdownContent",
  component: DropdownContent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  //   argTypes: {
  // variant: {
  //   control: "inline-radio",
  //   options: ["small", "large"],
  // },
  // selectedOption: { control: "text", defaultValue: "Base" },
  // expanded: { control: "boolean", defaultValue: false },
  // onClick: { action: "clicked" },
  // disabled: { control: "boolean" },
  //   },
} satisfies Meta<typeof DropdownContent>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleItems = [<div>Item 1</div>, <div>Item 2</div>];
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    children: sampleItems,
    // title: "Network",
    // expanded: false,
    // variant: "small",
    // selectedOption: "Base",
    // icon: <IconNetworkBase />,
  },
};
