import type { Meta, StoryObj } from "@storybook/react";

import { InputAssetAmount } from "@/components/input-asset-amount";
import { RalphLogo } from "@/components/ralph-logo";

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
const ralphIcon = <RalphLogo variant="icon" />;
export const RalphInputAssetAmount: Story = {
  args: {
    icon: ralphIcon,
    amount: 100,
    tokenShortName: "PR",
  },
};

export const BurgerTokenInputAssetAmount: Story = {
  args: {
    icon: "🍔",
    amount: 100,
    tokenShortName: "BR",
  },
};
