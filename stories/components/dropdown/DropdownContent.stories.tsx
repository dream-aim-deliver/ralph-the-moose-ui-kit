import type { Meta, StoryObj } from "@storybook/react";

import { DropdownContent, DropdownItem } from "@/components/dropdown";
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
  // tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof DropdownContent>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleItems = [
  <DropdownItem key={1} title="default" selected={false} onClick={() => {}} />,
  <DropdownItem key={2} title="selected" selected={true} onClick={() => {}} />,
];
// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    children: sampleItems,
  },
};
