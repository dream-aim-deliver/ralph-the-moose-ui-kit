import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "@/components/tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description:
        "The title of the tooltip that is displayed in the collapsed view.",
    },
    content: {
      control: "text",
      description: "The content to be displayed in the tooltip.",
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextContent: Story = {
  args: {
    content:
      "Ordinal Inscriptions, similar to NFTs, are digital assets inscribed on a satoshi, the lowest denomination of a Bitcoin (BTC).",
    title: "Inscription",
  },
};
