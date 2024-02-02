import type { Meta, StoryObj } from "@storybook/react";

import { IconExternalLink } from "@/components/icons";

const meta = {
  title: "Icons/ExternalLink",
  component: IconExternalLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof IconExternalLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
