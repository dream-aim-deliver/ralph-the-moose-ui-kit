import type { Meta, StoryObj } from "@storybook/react";

import { MintCard } from "@/components/mint-card";

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
    mintedPercentage: { control: "number", name: "Minted Percentage" },
    mintLimit: { control: "number", name: "Mint Limit" },
    totalSupply: { control: "number", name: "Total Supply" },
    totalMinted: { control: "number", name: "Total Minted" },
    mintingFee: { control: "number", name: "Minting Fee" },
    mintingDisabled: { control: "boolean", name: "Minting Disabled" },
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
    onMint: () => {},
  },
};
