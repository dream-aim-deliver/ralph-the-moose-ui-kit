import type { Meta, StoryObj } from "@storybook/react";

import { Heading, HeadingVariant } from "@/components/heading";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Compoents/Heading",
  component: Heading,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: HeadingVariant },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H4: Story = {
  args: {
    variant: HeadingVariant.H4,
    title: "Heading 4",
  },
};

export const H5: Story = {
  args: {
    variant: HeadingVariant.H5,
    title: "Heading 4",
  },
};
