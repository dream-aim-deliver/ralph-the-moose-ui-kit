import type { Meta, StoryObj } from "@storybook/react";

import { BalanceCard } from "@/components/balance-card";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/BalanceCard",
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
    wrappedAmount: { control: "text", name: "Wrapped Balance" },
  },
} satisfies Meta<typeof BalanceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    inscriptionBalance: "80000",
    wrappedAmount: "20000",
    tokenShortName: "PR",
  },
};
