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
  argTypes: {},
} satisfies Meta<typeof InputAssetAmount>;

export default meta;
type Story = StoryObj<typeof meta>;
const ralphIcon = <RalphLogo variant="icon" />;
export const Ralph: Story = {
  args: {
    icon: ralphIcon,
    initialAmount: 100,
    tokenShortName: "PR",
    onChange: (value: number) => {
      console.log(value);
    },
  },
};

export const BurgerToken: Story = {
  args: {
    icon: "🍔",
    initialAmount: 100,
    tokenShortName: "BR",
    onChange: (value: number) => {
      console.log(value);
    },
  },
};
