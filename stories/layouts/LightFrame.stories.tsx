import type { Meta, StoryObj } from "@storybook/react";

import { LightFrame as Component } from "@/components/layouts/LightFrame";
import { Button } from "../../lib";

const meta = {
  title: "Layouts/Light Frame",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

const connectButton = <Button variant="primary" label="Connect Wallet" />;

export const LightFrame: Story = {
  args: {
    children: <div className="space-y-4">{connectButton}</div>,
  },
};
