import type { Meta, StoryObj } from "@storybook/react";

import { RalphLogo } from "@/components/ralph-logo";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Brand Assets/Ralph Logo",
  component: RalphLogo,
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
      options: ["icon", "full-vertical", "full-horizontal"],
    },
  },
} satisfies Meta<typeof RalphLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Icon: Story = {
  args: {
    variant: "icon",
  },
};

export const FullVertical: Story = {
  args: {
    variant: "full-vertical",
  },
};

export const FullHorizontal: Story = {
  args: {
    variant: "full-horizontal",
  },
};
