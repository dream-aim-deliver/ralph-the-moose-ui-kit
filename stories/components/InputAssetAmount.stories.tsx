import type { Meta, StoryObj } from "@storybook/react";

import { InputAssetAmount } from "@/components/input-asset-amount";
import { RalphLogo } from "@/components/ralph-logo";
import { Signal } from "@preact/signals-react";

const meta = {
  title: "Components/InputAssetAmount",
  component: InputAssetAmount,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof InputAssetAmount>;

// const amountSignal = useSignal(100);

export default meta;
type Story = StoryObj<typeof meta>;
const ralphIcon = <RalphLogo variant="icon" />;
export const Ralph: Story = {
  args: {
    icon: ralphIcon,
    amount: 100 as unknown as Signal<number>,
    tokenShortName: "PR",
  },
};

export const BurgerToken: Story = {
  args: {
    icon: "🍔",
    amount: 100 as unknown as Signal<number>,
    tokenShortName: "BR",
  },
};
