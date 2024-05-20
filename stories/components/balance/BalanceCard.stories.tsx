import type { Meta, StoryObj } from "@storybook/react";

import { BalanceCard } from "@/components/balance-card";
import { RalphLogo } from "@/components/ralph-logo";
import { Signal } from "@preact/signals-react";
import { TChainViewModel } from "../../../lib";

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
    claimableAmount: 0, // Add the missing property
    tokenShortName: "PR",
    icon: <RalphLogo variant="icon" />,
    fee: 2,
    networkCurrency: "", // Add the missing property
    onWrap: () => {},
    onUnwrap: () => {},
    onClaim: () => {}, // Add the missing property
    amountToWrap: 0 as unknown as Signal<number>, // Add the missing property
    SWrapStatusMessage: "Wrapping in progress..." as unknown as Signal<string>,
    amountToUnwrap: 0 as unknown as Signal<number>, // Add the missing property
    SClaimStatusMessage: "" as unknown as Signal<string>, // Add the missing property
    SWrapCardView: "wrapping" as unknown as Signal<
      "claiming" | "wrapping" | "default"
    >, // Add the missing property
    SUnwrapStatusMessage: "" as unknown as Signal<string>, // Add the missing property
    SUnwrapEndedStatusFrame: "" as unknown as Signal<string>, // Add the missing property
    SUnwrapCardView: "unwrapping" as unknown as Signal<
      "default" | "unwrapping" | "unwrapping-ended"
    >, // Add the missing property
    supportedChains: [
      {
        name: "Base",
        chainId: 1,
      },
      {
        name: "Ethereum",
        chainId: 2,
      },
    ], // Add the missing property
    activeChain: {
      value: {
        name: "Base",
        chainId: 1,
      },
    } as unknown as Signal<TChainViewModel>,
  },
};
