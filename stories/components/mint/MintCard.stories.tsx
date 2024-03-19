import type { Meta, StoryObj } from "@storybook/react";

import { MintCard } from "@/components/mint-card";
import { Signal } from "@preact/signals-react";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Mint/MintCard",
  component: MintCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    status: {
      control: "inline-radio",
      name: "Status",
      options: ["whitelisted", "network_error", "minting", "error", "success"],
    },
    error: { control: "text", name: "Error" },
    eligibleAmount: { control: "number", name: "Eligible Amount" },
    isMintingAmount: { control: "number", name: "Minting Amount" },
    mintedPercentage: { control: "number", name: "Minted Percentage" },
    mintLimit: { control: "number", name: "Mint Limit" },
    totalSupply: { control: "number", name: "Total Supply" },
    totalMinted: { control: "number", name: "Total Minted" },
    mintingFee: { control: "number", name: "Minting Fee" },
    mintingDisabled: { control: "boolean", name: "Minting Disabled" },
    tokenShortName: { control: "text", name: "Token Short Name" },
    feeCurrency: { control: "text", name: "Minting Currency" },
  },
} satisfies Meta<typeof MintCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mintedPercentage: 0.5,
    mintLimit: 100000,
    totalSupply: 100000,
    totalMinted: 50000,
    mintingFee: 10,
    mintingDisabled: false,
    tokenShortName: "PR",
    feeCurrency: "ETH",
    fee: 0.00123,
    expectedReturn: 1000,
    isMinting: { value: false } as unknown as Signal<boolean>,
    isMintingAmount: 100000000,
    walletNetwork: "Base",
    selectedNetwork: "Base",
    status: "whitelisted",
    eligibleAmount: 100,
    onMint: () => {},
  },
};
