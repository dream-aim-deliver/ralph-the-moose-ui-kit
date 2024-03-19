import type { Meta, StoryObj } from "@storybook/react";

import { BalanceCard } from "@/components/balance-card";
import { RalphLogo } from "@/components/ralph-logo";

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
    icon: { control: "object", name: "Icon" },
    fee: { control: "number", name: "Fee" },
    onWrap: { action: "wrap" },
    onUnwrap: { action: "unwrap" },
  },
} satisfies Meta<typeof BalanceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    inscriptionBalance: 80000,
    wrappedBalance: 20000,
    tokenShortName: "PR",
    icon: <RalphLogo variant="icon" />,
    fee: 2,
    onWrap: () => {},
    onUnwrap: () => {},
  },
};
