import type { Meta, StoryObj } from "@storybook/react";

import { PageTemplate as Component } from "@/components/layouts";
import { Button, TextButton, WalletCard } from "../../lib";

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
const disconnectButton = (
  <TextButton text="Disconnect" size="medium" onClick={() => {}}></TextButton>
);
const walletCard = (
  <WalletCard
    status="disconnected"
    address="0x1234...5678"
    connectButton={connectButton}
    disconnectButton={disconnectButton}
  />
);
export const Page: Story = {
  args: {
    children: <div className="w-full space-y-4">{walletCard}</div>,
  },
};
