import type { Meta, StoryObj } from "@storybook/react";

import { PageTemplate as Component } from "@/components/layouts";
import { Button } from "../../lib";

const meta = {
  title: "Layouts/Page Template",
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

export const Page: Story = {
  args: {
    children: <div className="space-y-4">{connectButton}</div>,
  },
};
