import type { Meta, StoryObj } from "@storybook/react";

import { IconExternalLinkSmall } from "@/components/icons";

const meta = {
  title: "Components/Icons/ExternalLinkSmall",
  component: IconExternalLinkSmall,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof IconExternalLinkSmall>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
