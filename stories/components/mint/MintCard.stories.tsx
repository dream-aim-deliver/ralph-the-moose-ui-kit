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
} satisfies Meta<typeof MintCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: true,
    stats: {
      mintedPercentage: 0.5,
      mintLimit: 100000,
      totalSupply: 100000,
      totalMinted: 50000,
    },
    fee: 10,
    allocation: 1000,
    disabled: false,
    isMinting: false,
    token: {
      shortName: "PR",
    },
    callbacks: {
      onMint: () => {},
    },
    network: {
      chainId: 1,
      name: "Ethereum",
      nativeCurrency: "ETH",
    },
  },
};

export const IsMinting: Story = {
  args: {
    isLoading: false,
    stats: {
      mintedPercentage: 0.5,
      mintLimit: 100000,
      totalSupply: 100000,
      totalMinted: 50000,
    },
    fee: 10,
    allocation: 1000,
    disabled: false,
    isMinting: true,
    token: {
      shortName: "PR",
    },
    callbacks: {
      onMint: () => {},
    },
    network: {
      chainId: 1,
      name: "Ethereum",
      nativeCurrency: "ETH",
    },
  },
};

export const Disabled: Story = {
  args: {
    isLoading: true,
    stats: {
      mintedPercentage: 0.5,
      mintLimit: 100000,
      totalSupply: 100000,
      totalMinted: 50000,
    },
    fee: 10,
    allocation: 1000,
    disabled: true,
    isMinting: false,
    token: {
      shortName: "PR",
    },
    callbacks: {
      onMint: () => {},
    },
    network: {
      chainId: 1,
      name: "Ethereum",
      nativeCurrency: "ETH",
    },
  },
};
