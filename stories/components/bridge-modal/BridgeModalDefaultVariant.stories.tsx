import type { Meta, StoryObj } from "@storybook/react";

import { BridgeModalDefaultVariant } from "@/components/bridge-modal";
import { RalphLogo } from "../../../lib";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/BridgeModal/DefaultVariant",
  component: BridgeModalDefaultVariant,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof BridgeModalDefaultVariant>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    supportedChains: [
      { chainId: 1, name: "Ethereum" },
      { chainId: 2, name: "Binance Smart Chain" },
      { chainId: 3, name: "Base" },
    ],
    activeChain: {
      chainId: 1,
      name: "Ethereum",
      bridgingFee: 0.00123,
      nativeCurrency: "ETH",
    },

    token: {
      shortName: "PR",
      icon: <RalphLogo variant="icon" />,
    },
    balance: { inscriptions: 100 },
    callbacks: {
      onBridge: () => {
        console.log("Bridge button clicked");
      },
      onClose: () => {
        console.log("Close button clicked");
      },
    },
  },
};
