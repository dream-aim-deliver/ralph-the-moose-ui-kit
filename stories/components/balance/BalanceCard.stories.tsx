import type { Meta, StoryObj } from "@storybook/react";

import { BalanceCard } from "@/components/balance-card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/Balance/BalanceCard",
  component: BalanceCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    inscriptionBalance: { control: "text", name: "Inscription Balance" },
    wrappedBalance: { control: "text", name: "Wrapped Balance" },
    tokenShortName: { control: "text", name: "Token Short Name" },
  },
} satisfies Meta<typeof BalanceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    isLoading: true,
    inscriptionBalance: 80000,
    wrappedBalance: 20000,
    tokenShortName: "PR",
    showWrapClaimVariant: () => {
      console.log("Wrap Claim Variant");
    },
    showUnwrapVariant: () => {
      console.log("Unwrap Variant");
    },
    showBridgeVariant: () => {
      console.log("Bridge Variant");
    },
  },
};
