import type { Meta, StoryObj } from "@storybook/react";

import { InputAssetAmount } from "@/components/input-asset-amount";

const meta = {
  title: "Components/InputAssetAmount",
  component: InputAssetAmount,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputAssetAmount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RalphInputAssetAmount: Story = {
  args: {
    icon: "🍔",
    amount: 100,
    tokenShortName: "PR",
  },
};
