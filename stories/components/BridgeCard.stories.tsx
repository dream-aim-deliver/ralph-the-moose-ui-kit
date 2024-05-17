import type { Meta, StoryObj } from "@storybook/react";

import { BridgeCard } from "@/components/bridge-card";
import { RalphLogo, TChainViewModel } from "../../lib";
import { Signal } from "@preact/signals-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/BridgeCard",
  component: BridgeCard,
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
} satisfies Meta<typeof BridgeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    supportedChains: [
      { chainId: 1, name: "Ethereum" },
      { chainId: 2, name: "Binance Smart Chain" },
    ],
    activeChain: {
      chainId: 1,
      name: "Ethereum",
    } as unknown as Signal<TChainViewModel>,
    tokenShortName: "ETH",
    icon: <RalphLogo variant="icon" />,
    maxBridgeAmount: 100,
    onBridge() {
      console.log("Bridge button clicked");
    },
  },
};
