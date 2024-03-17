import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "@/components/dropdown";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Layouts/Drop Down",
  component: Dropdown,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // variant: {
    //   control: "inline-radio",
    //   options: ["primary", "secondary"],
    // },
    // onClick: { action: "clicked" },
    // disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    expanded: false,
    // trigger: <div>Dropdown</div>,
    // items: [<div>Item 1</div>],
  },
};
