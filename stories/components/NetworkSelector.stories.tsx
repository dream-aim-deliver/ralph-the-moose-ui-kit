import type { Meta, StoryObj } from "@storybook/react";

import { NetworkSelector } from "@/components/network-selection";
import { IconElk, IconNetworkArthera, IconNetworkBase } from "../../lib";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/NetworkSelector",
  component: NetworkSelector,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof NetworkSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Small: Story = {
  args: {
    supportedNetworks: [
      {
        name: "Base",
        chainId: 8453,
        icon: <IconNetworkBase />,
      },
      {
        name: "Ethereum",
        chainId: 1,
        icon: <IconElk size={16} />,
      },
      {
        name: "Arthera",
        chainId: 56,
        icon: <IconNetworkArthera />,
      },
    ],
    activeNetwork: {
      name: "Arthera",
      chainId: 56,
      icon: <IconNetworkArthera />,
    },
    onNetworkChange: (network) => console.log(network),
  },
};
