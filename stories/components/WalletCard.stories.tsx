import type { Meta, StoryObj } from "@storybook/react";

import { WalletCard as Component } from "@/components/wallet-card";
import { Button, TextButton } from "../../lib";
import { IconMetaMaskWallet } from "@/components/icons/IconMetaMaskWallet";

const meta = {
  title: "Components/WalletCard",
  component: Component,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "inline-radio",
      options: ["connected", "disconnected"],
      description:
        "The title of the tooltip that is displayed in the collapsed view.",
    },
    address: {
      control: "text",
      description: "The wallet address.",
    },
  },
} satisfies Meta<typeof Component>;

export default meta;

type Story = StoryObj<typeof meta>;

const connectButton = <Button variant="primary" label="Connect Wallet" />;
const disconnectButton = (
  <TextButton text="Disconnect" size="medium" onClick={() => {}}></TextButton>
);
export const WalletCard: Story = {
  args: {
    status: "disconnected",
    address: "0x1234...5678",
    walletName: "My Wallet", // Added the missing walletName property
    connectButton,
    disconnectButton,
  },
};

const icon = <IconMetaMaskWallet size={12} />;
export const WalletCardWithIcon: Story = {
  args: {
    status: "disconnected",
    address: "0x1234...5678",
    walletName: "My Wallet", // Added the missing walletName property
    walletIcon: icon,
    connectButton,
    disconnectButton,
  },
};
